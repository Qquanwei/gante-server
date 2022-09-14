const http = require('http');
const ShareDB = require('sharedb');
const koa = require('koa');
const json1 = require('ot-json1');
const WebSocketJSONStream = require('@teamwork/websocket-json-stream');
const { WebSocketServer } = require('ws');
const { MongoClient } = require('mongodb');
const router = require('./router');
const db = require('sharedb-mongo')('mongodb://root:example@localhost:27017');

const app = new koa();
app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());
const wsServer = new WebSocketServer({ server });
ShareDB.types.register(json1.type);
wsServer.on('connection', (socket) => {
    const stream = new WebSocketJSONStream(socket);
    const backend = new ShareDB({ db });
    backend.listen(stream);
});

server.listen({
    host: '0.0.0.0',
    port: 9081
}, () => {
    console.log('start');
});
