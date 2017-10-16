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
        map += line
        map += line2
    }
    map += line
    return map;
}

class Map {
    constructor (width, height) {
        this.map = newMap(width, height);       
    }

    hi() {
        return this.map
    }
}

exports.default = Map;