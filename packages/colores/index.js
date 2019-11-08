console.log("Hello sketch.js");
let x = 0;
let canvas = undefined;
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  colorMode(HSB, 360, 100, 100, 100);
  let hue = 200;
  const step = 30;
  const colores = [];
  for (let i = 0; i < 5; i++) {
    colores.push({
      h: (hue % 360) + random(-20, 20),
      s: random(40, 60),
      b: 40,
      a: 100,
    });
    hue += step;
  }

  let x = 0;
  noStroke();
  for (const color of colores) {
    fill(color.h, color.s, color.b, color.a);
    rect(x, 0, width / colores.length, height);
    x += width / colores.length;
  }
}

function draw() {
  // background(255, 20);
  // ellipse(x, width / 2, 5, 5);
  // x++;
  // if (x >= width) {
  //   x = 0;
  // }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    noLoop();
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}
