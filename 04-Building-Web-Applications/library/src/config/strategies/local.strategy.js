const passport = require('passport');
const { Strategy } = require('passport-local');
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            (async function query() {
                let sql = "SELECT * from users WHERE username='"+username+"'" ;
                await con.query(sql, function (error, results, fields) {
                    if (error) throw error;
                    console.log(results[0]);
                    if(password == results[0].password){
                        done(null, results[0]);
                        
                    }else{
                        done(null, false);
                    }
                });
            }());
        }
    ));
}