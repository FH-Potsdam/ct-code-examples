console.log("Hello sketch.js");
let x = 0;
let canvas = undefined;
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  let a = 0.0;
  const steps = 200;
  let inc = PI / steps;
  for (let i = 0; i < steps; i++) {
    let x = i * (width / steps);
    let start = height / 2;
    let end = height / 2 + (sin(a) * height) / 4;
    const d = dist(x, start, x, end);
    console.log(d);
    strokeWeight(d * 0.03);
    for (let i = 0; i < d; i += random(5, 10)) {
      point(x, height / 2 + random(-d / 2, d / 2) + random(-50, 50));
    }
    // line(x, start, x, end);
    a = a + inc;
  }
}

function draw() {}

function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}
