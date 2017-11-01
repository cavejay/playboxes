const Socket = require("koa-socket-2");
const Singleton = require("singleton-class");

class IO extends Singleton {
  constructor(app) {
    super();

    this.io = new Socket();
    this.io.attach(app);
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
