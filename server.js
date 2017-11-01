const log = require("console-log-level")({
  level: "info",
  prefix: () => `${new Date()}::MAIN - `
}); // Would probably like a log factory somewhere so we don't have this mess at the top of every file

// Webstack
const koa = require("koa"); // Base server
const mount = require("koa-mount");
const api = require("./lib/api").callback();
// const IO = require("./lib/io");
const static = require("koa-static")("./web");

// inits
const app = new koa();

log.info("__Started__");

/*** Webserver middleware init ***/

// Logging middleware
app.use(async function logging(ctx, next) {
  log.info(`Connection from ${ctx.ip} for ${ctx.method} - ${ctx.href}`);
  await next();
});

// apply the API middleware to the api endpoint.
app.use(mount("/api", api));

// apply the Static file middleware. Still not sure if I just want to use caddy for this?
app.use(static);

// Init and attach the Websocket framework
// io(app);

app.listen(9090);
log.info("Listening on localhost:9090");

// Current goal is to go to site, be redirected to a new game and then being able to provide that 'code'/site to other people so that they can join that game.

// Develop game logic from there.
