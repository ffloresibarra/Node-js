const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});
function bookController(bookService, nav) {
    function getIndex(req, res){
        (async function query() {
            let sql = "SELECT * from books";
            await con.query(sql, function (error, results, fields) {
                if (error) throw error;
                res.render('bookListView',
                    {
                        nav,
                        title: 'Books',
                        books: results
                    });
            });
        }());

    }
    function getById(req, res){
        ///
        (async function query() {
            const { id } = req.params;
            let sql = `SELECT * from books where id_book=${id}`;
            await con.query(sql, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                res.render(
                    'bookView',
                    {
                        nav,
                        title: 'Library',
                        book: results[0]
                    }
                );
            });
        }());
    } 

    return{getIndex, getById};
}

module.exports= bookController;