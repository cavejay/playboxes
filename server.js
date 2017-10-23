const logger = require("console-log-level");

// Webstack
const IO = require("koa-socket-2"); // I want to move this out too
const koa = require("koa");

// inits
const log = new logger({ level: "info" });
const app = new koa();
const io = new IO();

// Webserver middleware init

// Logging middleware
app.use(async function logging(ctx, next) {
  log.info(`Connection from ${ctx.ip} for ${ctx.method} - ${ctx.href}`);
  await next();
});

// apply the api middleware
app.use(require("./lib/api").callback());
// Static file middleware. Still not sure if I just want to use caddy for this?
app.use(require("koa-static")("./web")); // maybe use koa mount for this?

// should apply the io stuff to a new koa instance that gets attached to the master one and mounted on /g or something.

// start server
app.listen(9090);
log.info("Listening on localhost:9090");

// Current goal is to go to site, be redirected to a new game and then being able to provide that 'code'/site to other people so that they can join that game.

// Develop game logic from there.
