const logger = require("console-log-level");

// Webstack
const IO = require("koa-socket-2");
const Cottage = require("cottage");
const koa = require("koa");

// Game imports
const Boxes = require("./lib/boxes");

// inits
const log = new logger({ level: "info" });
const app = new koa();
const io = new IO();

// Webserver middleware init
app.use(async function logging(ctx, next) {
  log.info(`Connection from ${ctx.ip} for ${ctx.method} - ${ctx.href}`);
  await next();
});
app.use(require("koa-static")("./web"));

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

// nice routes for webserver using cottage.
const routes = new Cottage();
routes.get("/api", async () => "This would create a new game!");
app.use(routes.callback());

// start server
app.listen(9090);
log.info("Listening on localhost:9090");

// Game stuff to check if it all works
var Game = new Boxes(4, 4, ["player1", "player2"]);

console.log(Game.showInfo());
console.log(Game.showMap());
