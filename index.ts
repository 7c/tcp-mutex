import * as net from 'net';

export function tryLock(port: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        try {
            const server = net.createServer((socket) => {
                socket.write('tcp-mutex\r\n');
                socket.pipe(socket);
            });

            server.on('error', (err) => {
                reject(err);
            });

            server.listen(port, '127.0.0.1', () => {
                resolve(true);
            });
        } catch (ex) {
            reject(ex);
        }
    });
}
