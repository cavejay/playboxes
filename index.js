const log = require("./lib/logFactory").newLog("MAIN");

// Webstack
const koa = require("koa"); // Base server
const mount = require("koa-mount");
// const api = require("./lib/api").callback();
// const IO = require("./lib/io");
const static = require("koa-static")("./static");

// inits
const app = new koa();
log.info("__Started__");

/*** Webserver middleware init ***/
// Logging middleware
app.use(async function logging(ctx, next) {
  log.info(`REQUEST - ${ctx.href}`);
  await next();
});

// apply the Static file middleware. Still not sure if I just want to use caddy for this?
app.use(static);

// // Init and attach the Websocket framework
// let io = new IO(app);

app.listen(9090);
log.info("Listening on localhost:9090");
// where your node app starts
