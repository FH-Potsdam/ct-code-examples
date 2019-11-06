console.log("Hello sketch.js");
let x = 0;
let canvas = undefined;
const step = 25;
const areas = [];
function setup() {
  canvas = createCanvas(100, 100);
  canvas.parent("sketch");
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      areas.push(new Area(x, y, step, step));
    }
  }
  noStroke();
}

function draw() {
  for (const item of areas) {
    item.update(mouseX, mouseY);
    item.display();
  }
}

function Area(x, y, w, h) {
  if (!(this instanceof Area)) {
    throw new TypeError(
      "Area can not be called as a function. Create an instance by calling new Area(x,y,w,h)"
    );
  }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.isOver = false;

  this.update = function(mX, mY) {
    if (
      mX > this.x &&
      mX < this.x + this.w &&
      mY > this.y &&
      mY < this.y + this.h
    ) {
      this.isOver = true;
    } else {
      this.isOver = false;
    }
  };

  this.display = function() {
    if (this.isOver === true) {
      fill("#ff6347");
    } else {
      fill("#00ff00");
    }
    rect(this.x, this.y, this.w, this.h);
  };
}

function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}
