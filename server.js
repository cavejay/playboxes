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
