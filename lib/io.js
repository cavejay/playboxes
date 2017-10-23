const IO = require("koa-socket-2");

class Socket {
  constructor(server) {
    // websocket middleware init
    io.attach(app);
    io.use(async (ctx, next) => {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      console.log(`WS ${ms}ms`);
    });

    // websocket setup
    io.on("connection", (ctx, data) => {
      console.log("a user connected");
      ctx.socket.emit("chat message", "Welcome to chat!");
      ctx.socket.on("disconnect", function() {
        console.log("user disconnected");
      });
      ctx.socket.on("chat message", function(msg) {
        io.broadcast("chat message", msg);
      });
    });
  }
}

exports.default = Socket;
