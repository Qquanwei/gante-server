const http = require('http');
const ShareDB = require('sharedb');
const json1 = require('ot-json1');
const WebSocketJSONStream = require('@teamwork/websocket-json-stream');
const { WebSocketServer } = require('ws');

const server = http.createServer();
const backend = new ShareDB();
const wsServer = new WebSocketServer({ server });

ShareDB.types.register(json1.type);

wsServer.on('connection', (socket) => {
    const stream = new WebSocketJSONStream(socket);
    backend.listen(stream);
});

server.listen({
    host: '0.0.0.0',
    port: 9081
}, () => {
    console.log('start');
});
