'use strict'

const con= require('./conexion');
const express = require('express');
const app = express()
const port = 3000;
app.listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

// app.post('/users', function (req, res){
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log(err);
//         console.log("Connected POST!")
//         var sql = "INSERT INTO users (name, age) VALUES ('Francisco', 24)";

//         con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log("1 record inserted  --");
//           res.send('successfully registered')
//         });
//       }); 
// })

app.get('/users', (req, res)=>{
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "SELECT * FROM users";
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
    });
})