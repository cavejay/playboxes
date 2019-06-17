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

export { Corner as default, Point };
