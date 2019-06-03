console.log('renderer:');

var Path = Path || undefined;
var Point = Point || undefined;
var view = view || undefined;
var Shape = Shape || undefined;
var Color = Color || undefined;
var Tool = Tool || undefined;

// Create a circle shaped path with its center at the center
// of the view and a radius of 30:

var black = new Color(0,0,0);

var gap = 40;
var rad = 8;

function Box (x,y) {
  return {
    gx: x,
    gy: y,
    filled: false
  }
}

var boxes = [];
boxes.push(new Box(0,0));
boxes.push(new Box(1,0));
boxes.push(new Box(1,1));
boxes.push(new Box(0,1));

var points = []
for (var j=-1;j<2;j++) {
    points.push(view.center + new Point(j*gap, gap))
    points.push(view.center + new Point(j*gap, 0))
    points.push(view.center + new Point(j*gap, -gap))
}

var dots = []
for (var i = 1; i < points.length; i++) {
  var path = new Path.Line(points[i], points[i-1]);
  path.strokeColor = 'black';
  path.strokeWidth = 5;
  
  // When the mouse enters the item, set its fill color to red:
  path.onMouseEnter = function(event) {
      this.strokeColor = 'red';
  }

  // When the mouse leaves the item, set its fill color to black:
  path.onMouseLeave = function(event) {
      this.strokeColor = 'black';
  }  
}



points.forEach(function (p)  {
  console.log(p);
  var t = new Path.Circle({
    center: p,
    radius: rad,
  })
  t.fillColor = black;
  dots.push(t);
})
  
// tie mouse over event to them 

// generate large arrays of them

// zooming

var toolPan = new Tool();
toolPan.onMouseDrag = function (event) {
    var offset = event.downPoint - event.point;
    view.center = view.center + offset;
};

function onResize(event) {
	// Whenever the window is resized, recenter the path:
}