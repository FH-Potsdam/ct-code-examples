function setup() {
  createCanvas(500, 500);
}

// found on https://forum.processing.org/two/discussion/13125/for-loop-to-make-a-spiral
function draw() {
  background(128);
  stroke(0);
  pointSpiral(width / 2, height / 2, 6, 0.1);
  stroke(255);
  pointSpiral(width / 4, height / 4, 10, 0.2);

  stroke(255, 0, 0);
  lineSpiral((width / 4) * 3, (height / 4) * 3, 10, 0.2);
}

/**
 * Draws a spiral based on points
 * @param x the x center
 * @param y the y center
 * @param revolutions the revolutions number of revolutions
 * @param steps the distance between points
 */
function pointSpiral(x, y, revolutions, steps) {
  push();
  translate(x, y);

  for (let t = 0; t < revolutions * TWO_PI; t += steps) {
    const x = t * cos(t);
    const y = t * sin(t);
    point(x, y);
  }

  pop();
}

/**
 * Draws a spiral based on lines
 * @param x the x center
 * @param y the y center
 * @param revolutions the revolutions number of revolutions
 * @param steps the distance between points
 */
function lineSpiral(x, y, revolutions, steps) {
  push();
  translate(x, y);
  let prevx = 0;
  let prevy = 0;
  for (let t = 0; t < revolutions * TWO_PI; t += steps) {
    const x = t * cos(t);
    const y = t * sin(t);
    line(prevx, prevy, x, y);
    prevx = x;
    prevy = y;
  }

  pop();
}
