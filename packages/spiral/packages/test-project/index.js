// @ts-nocheck
// this is my super duper project command shift 7
let color = 0;
let x = 0;
let y = 0;

// let counter = 0;
function setup() {
  const hue = 360;
  const sat = 100;
  const bright = 100;
  const a = 100;
  colorMode(HSB, hue, sat, bright, a);
  createCanvas(200, 200);
  // console.log("We are in setup");
  // console.log("Color is", color);
  y = height / 2;
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(color, 50, 100);
  color++;
  fill(color);
  stroke(color);
  rect(x, y, 30, 30);
  fill(color + 100);
  stroke(color + 100);
  ellipse(x + random(-5, 5), y + random(-5, 5), 10, 10);
  x = x + 1;

  if (x > width) {
    x = 0;
  }
  if (color > 360) {
    color = 0;
  }
  // console.log("We are in draw");
  // console.log("counter is", counter);
  // counter = counter + 1;
}
