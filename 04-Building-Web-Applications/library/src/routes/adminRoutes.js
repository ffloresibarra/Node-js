const express = require('express');
const adminRouter = express.Router();
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});

// let payload = {
//     UsernameDB: data.RegUsername,
//     PasswordDB: data.Regpassword
// };

// connection.query("INSERT INTO Codify SET ?", payload, function(err, rows) {
// });
function router(nav) {
    adminRouter.route('/')
        .get((req, res) => {
            (async function query() {
                let sql = "INSERT INTO books SET ?";
                await con.query(sql, payload, function (error, results, fields) {
                    if (error) throw error;
                    res.render('bookListView',
                        {
                            nav,
                            title: 'Books',
                            books: results
                        });
                });
            }());

        });
        return adminRouter;
}
module.exports = router;