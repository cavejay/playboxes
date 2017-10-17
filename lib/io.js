const IO = require("koa-socket.io");

class Socket {
  constructor(server) {
    const io = new IO({ namespace: "/" });

    let options = {
      /* socket.io options */
    };

    io.start(server, options /*, port, host */);

    io.on("join", function*() {
      console.log("join event receiverd, new user: ", this.data);

      // use global io send borad cast
      io.emit("msg", "[All]: " + this.data + " joind");

      // use current socket send a broadcast
      this.socket.broadcast("msg", "[All]: Hello guys, I'm " + this.data + ".");

      // just send to current user
      this.socket.emit(
        "msg",
        "[" + this.data + "]" + " Welcome to koa-socket.io !"
      );
    });

    this.io = io;
  }
}

exports.default = Socket;
