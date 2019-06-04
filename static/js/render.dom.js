console.log("renderer: DOM ");

let element = document.getElementById("gamespace");

function newDot(id) {
  return (
    '<span class="dot" id="' +
    id +
    '" onclick="dotClick(' +
    "'" +
    id +
    "'" +
    ')">•</span>'
  );
}
function vline(from, to) {
  return (
    '<span class="vlineInvs" id="' +
    from +
    "_" +
    to +
    '" onclick="lineClick(' +
    "'" +
    from +
    "','" +
    to +
    "'" +
    ')">|</span>'
  );
}
function hline(from, to) {
  return (
    '<span class="hlineInvs" id="' +
    from +
    "_" +
    to +
    '" onclick="lineClick(' +
    "'" +
    from +
    "','" +
    to +
    "'" +
    ')">—</span>'
  );
}

let vlineF = '<span class="vline">|</span>';
let hlineF = '<span class="hline">—</span>';

function square(id) {
  return (
    '<span class="box" id="' +
    id +
    '" onclick="fillBox(' +
    "'" +
    id +
    "'" +
    ')"> </span>'
  );
}

function dotClick(id) {
  console.log(id);
}

function fillBox(id) {
  let b = document.getElementById(id);
  b.setAttribute("class", "boxFill");
  console.log("filled box " + id);
}

function lineClick(from, to) {
  console.log(from + " " + to);
  let o = "horizontal";
  if (from.split("-")[0] != to.split("-")[0]) {
    o = "vertical";
  }
  console.log(o);
  let line = document.getElementById(from + "_" + to);
  line.setAttribute("class", "hline");
}
function makeGrid(width, height) {
  let ret = "";
  for (let i = 0; i < height * 2; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < width; j++) {
        let dcoord = Math.floor(i / 2) + "-" + j;
        ret += newDot(dcoord);
        if (j < width - 1) {
          ret += hline(dcoord, Math.floor(i / 2) + "-" + (j + 1));
        }
      }
    } else {
      if (i > height * 2 - 2) break;
      for (let j = 0; j < width; j++) {
        let dcoord = Math.floor(i / 2) + "-" + j;
        ret += vline(dcoord, Math.floor(i / 2) + 1 + "-" + j);
        if (j < width - 1) {
          ret += square(
            "sqr" + Math.floor(Math.random() * Math.random() * 99990)
          );
        }
      }
    }
    ret += "<br>";
  }
  return ret;
}

// Make the DIV element draggable:
dragElement(document.getElementById("gamespace"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

element.innerHTML = makeGrid(10, 10);
