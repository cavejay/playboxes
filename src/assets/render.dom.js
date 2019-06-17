console.log("renderer: DOM ");

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
function vline(from, to, visible) {
  return (
    `<span class="vline ${visible ? "" : "invisibleLine"}" id="` +
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
function hline(from, to, visible) {
  return (
    `<span class="hline ${visible ? "" : "invisibleLine"}" id="` +
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
function square(id, val) {
  return (
    '<span class="box" id="' +
    id +
    '" onclick="fillBox(' +
    "'" +
    id +
    "'" +
    `)">${val && val != "!" ? val[0] : " "}</span>`
  );
}
let vlineF = '<span class="vline">|</span>';
let hlineF = '<span class="hline">—</span>';

function dotClick(id) {
  console.log(id);
}

function makeGrid(width, height) {
  width++;
  height++;
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
          ret += square("sqrd" + dcoord);
        }
      }
    }
    ret += "<br>";
  }
  return ret;
}

// Make the DIV element draggable:

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

dragElement(document.getElementById("gamespace"));

/**
 * Steps
 *
 * Data representation
 * Update + export data
 * Create from data representation
 *
 */

// '22 ?? ?!?!? ?? ?!?!? ??'
function simpleEmptyGrid(side) {
  let r = `${side}${side}`;
  let d = [];
  for (let i = 0; i < side * 2 + 1; i++) {
    d.push(
      i % 2
        ? new Array(side * 2 + 1)
            .fill("?")
            .map((e, i) => (i % 2 ? "!" : e))
            .join("")
        : new Array(side + 1).join("?")
    );
  }
  return r + d.join("|");
}

let gridstr = simpleEmptyGrid(9);
console.log(gridstr);

// ?? ?!?!? ?? ?!?!? ??
function gridFromString(str) {
  let width = str[0];
  let height = str[1];
  let data = str.slice(2).split("|");

  let ret = "";
  for (let i = 0; i <= height * 2 + 1; i++) {
    if (i % 2 == 0) {
      // horizontal Line render (no boxes)
      for (let j = 0; j <= width; j++) {
        let dcoord = Math.floor(i / 2) + "-" + j;
        ret += newDot(dcoord);
        if (j <= width - 1) {
          ret += hline(
            dcoord,
            Math.floor(i / 2) + "-" + (j + 1),
            data[i][j] != "?"
          );
        }
      }
    } else {
      // vertical + bo line render
      if (i > height * 2 - 1) break;
      for (let j = 0; j <= width * 2 + 1; j++) {
        let dcoord = Math.floor(i / 2) + "-" + j / 2;
        if (j % 2 == 0) {
          ret += vline(
            dcoord,
            Math.floor(i / 2) + 1 + "-" + j / 2,
            data[i][j] != "?"
          );
        } else {
          ret += square("sqr" + dcoord, data[i][j]);
        }
      }
    }
    ret += "<br>";
  }
  return ret;
}

let g2 = "22??|?!?!?|??|?!?!?|??";
console.log(g2);

function drawGame(gridstr) {
  let element = document.getElementById("gamespace");
  element.innerHTML = gridFromString(gridstr);
}

// drawGame(g2);

// function lineClick(from, to) {
//   console.log(from + " " + to);
//   let o = "horizontal";
//   if (from.split("-")[0] != to.split("-")[0]) {
//     o = "vertical";
//   }
//   console.log(o);
//   let line = document.getElementById(from + "_" + to);
//   line.setAttribute("class", "hline");
// }
