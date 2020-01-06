process.stdout.write('\u001B[2J\u001B[0;0F');
let counter= 0;
let sockets={};
const server = require('net').createServer();

function timestamp(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}
server.on('connection', socket =>{
    socket.id= counter++;
    sockets[socket.id]=socket;

    console.log('Cliente connected');
    
    socket.write('Please type your name: ');

    socket.on('data', data =>{
        if(!sockets[socket.id]){
            socket.name=data.toString().trim();
            socket.write(`Welcome ${socket.name}`);
            sockets[socket.id]=socket;
            return;
        }
        Object.entries(sockets).forEach(([key,cs])=>{
            if(socket.id == key) return;
        })
        socket.write(`${socket.name} ${timestamp()}: `);
        socket.write(data);
    });
    socket.on('end', () =>{
        delete sockets[socket.id];
        console.log('Client Disconnected');
    })
    socket.setEncoding('utf8');
});

server.listen(3000, () => console.log('Server Bound'))