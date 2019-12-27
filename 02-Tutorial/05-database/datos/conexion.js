'use strict'
const mysql=require('mysql');
const con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_hero"
  });
  module.exports=con;
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO users (name, age) VALUES ('Francisco', 24)";
  //   con.query(sql, function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //     con.end();
  //     // process.exit(0);
  //   });
  // // });
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "SELECT * FROM users";
  //   con.query(sql, function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //     con.end();
  //     // process.exit(0);
  //   });
  // });

 
  