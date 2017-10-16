const Map = require('./map').default

class Boxes {
    // class<Boxes> | num, num, array<User/String>
    constructor(width, height, players) {
        this.map = new Map(width, height);
        this.playerCount = players.length;
        this.players = players
    }

    showMap() {
        return this.map.print();
    }

    showInfo() {
        return `Players: ${this.playerCount}
Names: ${this.players}
Map Size: Width: ${(this.map.map[0].length-1)/2}, Height: ${(this.map.map.length-1)/2}`
    }

    // 
    startGame(firstPlayer) {

    }
}

exports.default = Boxes