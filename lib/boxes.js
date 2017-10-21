const Map = require("./map");
const log = require("console-log-level")({ level: "info" });

class Boxes {
  // class<Boxes> <- num, num, array<User/String>
  constructor(width, height, players) {
    this.map = new Map(width, height);
    this.playerCount = players.length;
    this.players = players;
    log.debug("started a new game of Boxes.\n" + this.showInfo());

    // init other vars
    this.currentTurn = -1;

    // This is  debug thing. it needs to be removed later.
    this.broadcast = input => {
      log.info("this needs to be an actual function that sends: " + input);
    };
  }

  showMap() {
    return this.map.print();
  }

  showInfo() {
    return `Players: ${this.playerCount}
Names: ${this.players}
Map Size: Width: ${(this.map.map[0].length - 1) / 2}, Height: ${(this.map.map
      .length -
      1) /
      2}`;
  }

  // nummarray eg 142398C
  startGame(turnarray) {
    this.firstTurn = turnarray >> (this.playerCount - 1);
    this.broadcast("gamestart." + turnarray);
    this.broadcast("gameinfo." + this.players);
    // this.players[this.currentTurn].contact(
    //   `NewTurn.${this.players[this.currentTurn]}`
    // );
  }
}

module.exports = Boxes;
