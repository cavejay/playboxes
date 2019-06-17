import Corner from "./Corner";

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

Boxes.prototype.updateLine = function updateLine(start, direction) {
  console.log("updating line: ", start, direction);
  if (direction == "h") {
    this.boardArray[start.y][start.x].setHline(1);
  } else {
    this.boardArray[start.y][start.x].setVline(1);
  }

  // console.log(this.boardArray);
};

Boxes.prototype.strImport = function strImport() {};

Boxes.prototype.strExport = function strExport() {
  let r = `${this.wid}${this.len}`;
  let d = [];

  for (let i = 0; i <= this.len; i++) {
    d.push(
      this.boardArray[i]
        .map((e, i) => {
          if (e.hline != -1) {
            return e.hline == 0 ? "?" : e.hline;
          }
        })
        .join("")
    );

    d.push(
      this.boardArray[i]
        .map((e, i) => {
          let s = "";
          if (e.vline != -1) {
            s += e.vline == 0 ? "?" : e.vline;
            if (e.hline != -1) {
              s += e.value == 0 ? "!" : e.value;
            }
          }
          // s += e.vline != -1 || e.hline != -1 ? "" : "!";
          return s;
        })
        .join("")
    );
  }
  console.log(d);

  let output = r + d.slice(0, -1).join("|");

  console.log(output);
  return output;
};

Boxes.prototype.validateBoard = function validateBoard() {};

export { Boxes as default };
