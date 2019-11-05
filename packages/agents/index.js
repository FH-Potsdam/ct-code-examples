let x = 0;
let canvas = undefined;
let jim = undefined;
const agents = [];
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  jim = new agent(random(width), random(height));
}

function draw() {
  jim.update();
  jim.display();
  for (const item of agents) {
    item.update();
    item.display();
  }
}

function mousePressed() {
  agents.push(new agent(mouseX, mouseY));
}
function mouseDragged() {
  agents.push(new agent(mouseX, mouseY));
}
function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}

/**
 * @todo How to constrain the agent to the screen?
 * @todo How to give an agent a live time?
 * @todo How to combine with package/motion-detection?
 *
 */
function agent(x, y) {
  // this.xoff = x;
  // this.yoff = y;
  // this.noiseRange = 2;

  this.x = x;
  this.y = y;

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    // constrain him to the canvas
  };

  this.display = function() {
    strokeWeight(2);
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 5);
  };

  // this.update = function() {
  //   this.xoff += 0.01;
  //   let xn = noise(this.xoff) * this.noiseRange;
  //   this.yoff += 0.01;
  //   let yn = noise(this.yoff) * this.noiseRange;
  //   this.x = this.x + xn - this.noiseRange / 2; //random(-1, 1);
  //   this.y = this.y + yn - this.noiseRange / 2; // random(-1, 1);
  //   // constrain him to the canvas
  //   if (this.x <= 0) {
  //     this.x = 0;
  //   }
  //   if (this.x >= width) {
  //     this.x = width;
  //   }
  //   if (this.y <= 0) {
  //     this.y = 0;
  //   }
  //   if (this.y >= height) {
  //     this.y = height;
  //   }
  // };
}
