const dgram = require('dgram');
const PORT = 3000;
const HOST = "127.0.0.1";

//Server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
})
server.bind(PORT, HOST);

// Client

setInterval(function () {
    const Client = dgram.createSocket('udp4');

    const msg = Buffer.from('Pluralsite rocks');
    Client.send(msg,0, msg.length, PORT, HOST, (err) => {
        if (err) throw err;
        console.log('UDP message sent');
        Client.close();
    });
}, 1000);