/*
    Returns something like:
    [". . . . .",
     "         ",
     ". . . . .",
     "         ",
     ". . . . .",
     "         ",
     ". . . . .",
     "         ",
     ". . . . ."
    ]
*/
function newMap(width, height) {
    let map = [];
    let line = "."
    let line2 = " "
    for (j = 0; j < width; j++) {
        line += " ."
        line2 += "  "
    }
    for (j = 0; j < height; j++) {
        map.push(line);
        map.push(line2);
    }
    map.push(line)
    return map;
}

class Map {
    constructor (width, height) {
        this._map = newMap(width, height);
    }

    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }

    print() {
        return this.map.join('\r\n')
    }
}

exports.default = Map;