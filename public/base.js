function Point (x,y) {
  this.t = 0;
  this.b = 0;
  this.l = 0;
  this.r = 0;
  this.x = x;
  this.y = y;
}

Point.prototype.setSide  = function (update) {
  this.t = update.t || this.t;
  this.b = update.b || this.b;
  this.l = update.l || this.l;
  this.r = update.r || this.r;
}

Point.prototype.setPos = function (x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getPos = function () {
  return {x: this.x, y: this.y};
}

// Should I make it a linked grid? or just an array of arrays? 



function Boxes (x,y,dist) { 
  this.x = x;
  this.y = y;
  this.r = dist || 30;
  this.boardArray = [];
}

Boxes.prototype.initialiseBoard = function initialiseBoard (len, wid) {
  this.len = len;
  this.wid = wid;
  
  var t = [];
  for (var i = 0; i <= wid; i++) {
    t.push('')
  }
  
  for (var i = 0; i <= len; i++) {
    this.boardArray.push(t.slice(0));
  }

  for (var i = 0; i <= len; i++) {
    for (var j = 0; j <= wid; j++) {
      var tx = this.x+this.r*i;
      var ty = this.y+this.r*j;
      this.boardArray[i][j] = new Point(tx, ty);
    }
  }

  return this;
}

Boxes.prototype.validateBoard = function validateBoard () {
  
}

Boxes.prototype.setBoard = function setBoard (boardArray) {
  
}

Boxes.prototype.getBoard = function getBoard () {
  
}

Boxes.prototype.updatePoint = function updatePoint () {
  
}

var Box1 = new Boxes(50,50);
Box1.initialiseBoard(50,50);

