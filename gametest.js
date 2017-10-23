const log = require("console-log-level")();

// Game imports
const Boxes = require("./lib/boxes");

// Game stuff to check if it all works
var Game = new Boxes(4, 4, ["player1", "player2"]);
Game.startGame();
