function setup() {
  randomSeed(912232);
  canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  const step = 25;
  const margin = step / 5;
  for (let x = 0; x < width; x = x + 25) {
    for (let y = 0; y < height; y = y + 25) {
      let prevx = x;
      let prevy = y;
      for (let i = 0; i < 5; i++) {
        strokeWeight(random(2, 5));
        const tmpx = random(x + margin, x + 25 - margin);
        const tmpy = random(y + margin, y + 25 - margin);
        point(tmpx, tmpy);
        strokeWeight(0.5);
        if (i !== 0) {
          line(tmpx, tmpy, prevx, prevy);
        }
        prevx = tmpx;
        prevy = tmpy;
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
