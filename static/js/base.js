function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Corner(x, y) {
  this.vline = 0;
  this.hline = 0;
  this.value = 0;
  this.x = x;
  this.y = y;
}

Corner.prototype.setVline = function(vLine) {
  this.vline = vLine || this.vline;
};

Corner.prototype.setHline = function(hLine) {
  this.hline = hLine || this.hline;
};

Corner.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
};

Corner.prototype.getPos = function() {
  return { x: this.x, y: this.y };
};

function Boxes(len, wid) {
  this.len = len;
  this.wid = wid;
  this.boardArray = [];
}

Boxes.prototype.initialiseBoard = function initialiseBoard(len, wid) {
  this.len = len;
  this.wid = wid;

  for (var i = 0; i <= len; i++) {
    let row = [];
    for (var j = 0; j <= wid; j++) {
      let p = new Corner(j, i);
      if (j == wid) {
        p.setHline(-1);
      }
      if (i == len) {
        p.setVline(-1);
      }
      row.push(p);
    }
    this.boardArray.push(row);
  }

  return this;
};

Boxes.prototype.updateLine = function updateLine(start, direction) {};

Boxes.prototype.strImport = function strImport() {};

Boxes.prototype.strExport = function strExport() {
  let r = `${this.wid}${this.len}`;
  let d = [];

  for (let i = 0; i <= this.len; i++) {
    d.push(
      this.boardArray[i]
        .map((e, i) => {
          if (e.hline != -1) {
            return "?";
          }
        })
        .join("")
    );
    d.push(
      this.boardArray[i]
        .map((e, i) => {
          let s = "";
          if (e.vline != -1) {
            s += "?";
            if (e.hline != -1) {
              s += "!";
            }
          }
          // s += e.vline != -1 || e.hline != -1 ? "" : "!";
          return s;
        })
        .join("")
    );
  }

  console.log(d);
  return r + d.join("|");
};

Boxes.prototype.validateBoard = function validateBoard() {};

var Box1 = new Boxes().initialiseBoard(2, 2);

function lineClick(from, to) {
  console.log(from + " " + to);
  let o = "horizontal";
  if (from.split("-")[0] != to.split("-")[0]) {
    o = "vertical";
  }

  let p = new Point(from.split("-")[0], from.split("-")[1]);
  Box1.updateLine(p, o[0]);
}

drawGame(Box1.strExport());
