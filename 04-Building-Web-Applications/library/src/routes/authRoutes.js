const express = require('express');
const authRouter = express.Router();
const mysql = require('mysql');
const debug = require('debug')('app:authRoutes');
const passport = require('passport');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});
function router(nav) {

    authRouter.route('/signUp')
        .post((req, res) => {
            const { username, password } = req.body;
            const user = { username, password };
            (async function addUser() {
                let sql = "INSERT INTO users SET ?";
                await con.query(sql, user, function (error, results, fields) {
                    if (error) throw error;
                    debug(results);
                    req.login(results, () => {
                        res.redirect('/auth/profile');
                    });
                });
            }());
        });
    authRouter.route('/signIn')
        .get((req, res) => {
            res.render('signin', {
                nav,
                title: "Sign In"
            });
        })
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
    authRouter.route('/profile')
        .all((req, res, next)=>{
            if(req.user){
                next();
            }else{
                res.redirect('/');
            }
        })
        .get((req, res) => {
            res.json(req.user);
        });

    return authRouter;
}
module.exports = router;