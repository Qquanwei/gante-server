const shareDB = require('sharedb');
const WebSocketJSONStream = require('websocket-json-stream');

module.exports = () => {
  return async (ctx, next) => {
    const backend = new shareDB();
    await ctx.socket.emit('res', 'hello world');
    const stream = new WebSocketJSONStream(ctx.socket);
    backend.listen(stream);
    await next();
  }
}
