console.log("Hello sketch.js");
let x = 0;
let canvas = undefined;
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  const gridSize = 25;
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // rect(x, y, gridSize, gridSize);
      for (let i = 0; i < floor(random(5)); i++) {
        strokeWeight(random(2, 5));
        point(
          x + gridSize / 4 + random(gridSize / 4),
          y + gridSize / 4 + random(gridSize / 4),
        );
      }
    }
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
