var net = require('net');

function tryLock(port) {
    return new Promise((resolve,reject)=>{
        try {
            var server = net.createServer(function(socket) {
                socket.write('Echo server\r\n');
                socket.pipe(socket);
            });
            server.on('error',(err)=>{
                reject(err);
            })
            server.listen(port, '127.0.0.1',()=>{
                resolve(true);
            });
        } catch(ex) {
            
        }
    })
    
}

module.exports={
    tryLock
}