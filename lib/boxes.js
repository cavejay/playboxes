const Map = require('./map').default

class Boxes {
    // num, num, array<User>
    constructor(width, height, players) {
        this.map = new Map(width, height);
        this.playerCount = players.length;
        this.players = players
    }

    showMap() {
        return this.map.hi()
    }
}

exports.default = Boxes