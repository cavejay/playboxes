var PIXI = PIXI || undefined

// Autodetect, create and append the renderer to the body element
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { backgroundColor: 0xFFFFFF, antialias: true });
document.getElementById('canvas').appendChild(renderer.view);

// Create the main stage for your display objects
var stage = new PIXI.Container();

// Initialize the pixi Graphics class
var graphics = new PIXI.Graphics();

function Point (x,y) {
  return {x: x, y: y}
}

var gap = 40;
var rad = 8;
var points = []
for (var j=-1;j<2;j++) {
    points.push(new Point(60+j*gap, 60+gap))
    points.push(new Point(60+j*gap, 60))
    points.push(new Point(60+j*gap, 60-gap))
}

// Set the fill color
graphics.beginFill('0x0'); // Black

// Draw a circle
points.forEach(function (p) {
  graphics.drawCircle(p.x, p.y, rad); // drawCircle(x, y, radius)  
})

// Applies fill to lines and shapes since the last call to beginFill.
graphics.endFill();

// graphics.drawRect(240, 150, 75, 75); // drawRect(x, y, width, height)

// Add the graphics to the stage
stage.addChild(graphics);

// Start animating
animate();
function animate() {
    //Render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}

window.onresize = function (event){
    var w = window.innerWidth;
    var h = window.innerHeight;

    //this part resizes the canvas but keeps ratio the same
    renderer.view.style.width = w + "px";
    renderer.view.style.height = h + "px";

    //this part adjusts the ratio:
    renderer.resize(w,h);
}