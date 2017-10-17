const Boxes = require("./lib/boxes").default;
// const IO = require("./lib/io").default;
const Cottage = require("cottage");
const http = require("http");

const app = new Cottage();

app.get("/", async () => "This would create a new game!");

// var server = http.createServer(app.callback());

// var io = new IO(server);

app.listen(9090);
// server.listen(9090);
console.log("Server Listening on localhost:9090");

var Game = new Boxes(4, 4, ["player1", "player2"]);

console.log(Game.showInfo());
console.log(Game.showMap());
