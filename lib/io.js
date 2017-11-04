const Socket = require("koa-socket-2");
const Singleton = require("singleton-class");
const log = require("./logFactory").newLog("IO");

let usercount = 0;
class IO extends Singleton {
  constructor(app) {
    super();

    this.io = new Socket();
    this.io.attach(app);

    // setup user counting
    this.io.on("connection", (ctx, data) => {
      usercount++;
      log.info(`New user connected. There are ${usercount} users connected`);
      ctx.socket.on("disconnect", function() {
        usercount--;
        log.info(
          `user disconnected. There are now ${usercount} users connected`
        );
      });
    });
  }

  use(func) {
    this.io.use(func);
    return this;
  }

  on(type, cb) {
    this.io.on(type, cb);
    return this;
  }
}

module.exports = IO;
