var Two = Two || undefined
var Boxes = Boxes || undefined
var Box1 = Box1 || undefined

// Make an instance of two and place it on the page.
var elem = document.getElementById('renderer');
var two = new Two({fullscreen: true, autostart: true}).appendTo(elem);

var board = []

var draw = function (instance) {
  instance.boardArray.forEach(function (i) {
    let r = [];
    i.forEach(function () {
      r.push({
        r: '',
        b: '',
        d: '',
        team: ''
      })
    });
    
    board.push(r);
  });
  
  let b = instance.boardArray;
  
  for (let x=0; x < b.length; x++) {
    for (let y=0; y  < b[x].length; y++) {      
      let l1,l2 = undefined;
      if (x < b.length-1) {
        let l1 = two.makeLine(b[x][y].x, b[x][y].y, b[x+1][y].x, b[x+1][y].y);
        l1.linewidth = 3;
        l1.stroke = 'lightgrey';
        board[x][y].r = l1
      }
      if (y < b[x].length-1) {
        let l2 = two.makeLine(b[x][y].x, b[x][y].y, b[x][y+1].x, b[x][y+1].y);
        l2.linewidth = 3;
        l2.stroke = 'lightgrey';
        board[x][y].b = l2;
      }
      
      let t = two.makeCircle(b[x][y].x, b[x][y].y, 5);
      t.fill = 'navy';
      t.noStroke();
      board[x][y].d = t;
    }
  }
  
  two.update();
}

// Don't forget to tell two to render everything
// to the screen
draw(Box1);