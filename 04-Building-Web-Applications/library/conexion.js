var sql = require('mysql');
var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "library"
});

con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + con.threadId);
});

con.query('SELECT * from books', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    // connected!
  });