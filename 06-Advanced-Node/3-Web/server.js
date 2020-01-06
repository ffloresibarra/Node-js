const server =require('http').createServer();

server.on('request', (req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello World\n');
});


// const server= require("server");
// server.createServer(function(req, res){
//     res.writeHead(200, {"contenr-type":"text/html"});
//         res.write("<!DOCTYPE html>");
//         res.write("<html>");
//             res.write("<head>");
//                 res.write("<title>Servidor</title>");
//                 res.write("<link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'>");
//             res.write("</head>");
//             res.write("<body>"+
//                         "<div class='container'>"+
//                             "<div class='jumbotron'>"+
//                                 "<div class='page-header'><h1>Hola soy DevOPS</h1></div>"+
//                             "</div>"+
//                         "</div>"+
//                     "</body>");
//             res.write("</html>");
// }).listen(8080);

server.listen(3000);