const log = require("./lib/logFactory").newLog("MAIN");

// Webstack
const koa = require("koa"); // Base server
const mount = require("koa-mount");
const api = require("./lib/api").callback();
const IO = require("./lib/io");
const static = require("koa-static")("./web");

// inits
// const app = new koa();
// log.info("__Started__");

/*** Webserver middleware init ***/
// Logging middleware
/** 
app.use(async function logging(ctx, next) {
  log.info(`REQUEST - ${ctx.href}`);
  await next();
});
*/
// apply the API middleware to the api endpoint.
// app.use(mount("/api", api));

// apply the Static file middleware. Still not sure if I just want to use caddy for this?
// app.use(static);

// Init and attach the Websocket framework
// let io = new IO(app);

// app.listen(9090);
// log.info("Listening on localhost:9090");
// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/dom.html");
});

app.get("/paper", function(req, res) {
  res.sendFile(__dirname + "/views/paper.html");
});

app.get("/pixi", function(req, res) {
  res.sendFile(__dirname + "/views/pixi.html");
});

app.get("/two", function(req, res) {
  res.sendFile(__dirname + "/views/two.html");
});

app.get("/dom", function(req, res) {
  res.sendFile(__dirname + "/views/dom.html");
});

// listen for requests :)
var listener = app.listen(8080, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
