//  based on
// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-13: Simple motion detection

// Variable for capture device
let video;
// Previous Frame
let prevFrame;
// How different must a pixel be to be a "motion" pixel
const threshold = 80;
let motionX = 0;
let motionY = 0;
let prevMotionX = 0;
let prevMotionY = 0;
let hasMotion = false;

let lerpX = 0;
let lerpY = 0;
const constraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 480
    },
    optional: [{ maxFrameRate: 5 }]
  },
  audio: false
};

function preload() {
  const pdevices = navigator.mediaDevices.enumerateDevices();
  pdevices
    .then(devices => {
      console.log("connected device", devices);
    })
    .catch(err => {
      console.error(err);
    });
  const supportedConstrains = navigator.mediaDevices.getSupportedConstraints();
  console.log("supported constrains", supportedConstrains);
}
function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(constraints, stream => {
    // console.log(stream);
    console.log("device id", stream.getVideoTracks()[0].getSettings().deviceId);
    console.log(
      "framerate",
      stream.getVideoTracks()[0].getSettings().frameRate
    );
    console.log("height", stream.getVideoTracks()[0].getSettings().height);
    console.log("width", stream.getVideoTracks()[0].getSettings().width);
    console.log("settings", stream.getVideoTracks()[0].getSettings());
  });
  video.size(width, height);
  video.hide();
  // Create an empty image the same size as the video
  prevFrame = createImage(video.width, video.height);
}

function draw() {
  image(prevFrame, 0, 0); // use this to draw the actual video (we need this to make an analysis)

  loadPixels(); // load the screen pixels
  video.loadPixels(); // load the video pixels
  prevFrame.loadPixels(); // laod the buffer pixels
  /**
   * These values below are used to calculate an averafe XY position
   * of the motion. Allows to track the center of the motion
   */
  let avgX = 0;
  let avgY = 0;
  let count = 0;
  // Begin loop to walk through every pixel
  for (var x = 0; x < video.width; x++) {
    for (var y = 0; y < video.height; y++) {
      // Step 1, what is the location into the array
      var loc = (x + y * video.width) * 4;

      // Step 2, what is the previous color
      var r1 = prevFrame.pixels[loc];
      var g1 = prevFrame.pixels[loc + 1];
      var b1 = prevFrame.pixels[loc + 2];

      // Step 3, what is the current color
      var r2 = video.pixels[loc];
      var g2 = video.pixels[loc + 1];
      var b2 = video.pixels[loc + 2];

      // Step 4, compare colors (previous vs. current)
      // using distSq gives a tremendous performance boost
      var diff = distSq(r1, g1, b1, r2, g2, b2);

      // Step 5, How different are the colors?
      // If the color at that pixel has changed, then there is motion at that pixel. Use threshold * threshold becase we are not using sqrt in distSq
      if (diff > threshold * threshold) {
        // rect(0, 0, width, height);
        // If motion, display black
        pixels[loc] = 0;
        pixels[loc + 1] = 0;
        pixels[loc + 2] = 0;
        pixels[loc + 3] = 255;
        avgX += x;
        avgY += y;
        count++;
      } else {
        // rect(0, 0, width, height);
        // If not, display white
        pixels[loc] = 255;
        pixels[loc + 1] = 255;
        pixels[loc + 2] = 255;
        pixels[loc + 3] = 255;
      }
    }
  }
  // updatePixels(); // use this to update the pixels and show the diff

  if (count > 200) {
    motionX = avgX / count;
    motionY = avgY / count;
  }
  // Draw a circle at the tracked pixel
  // lerpX = lerp(lerpX, motionX, 0.1);
  // lerpY = lerp(lerpY, motionY, 0.1);
  // strokeWeight(2.0);
  // stroke(0);
  // ellipse(lerpX, lerpY, 36, 36);

  // calc a value from all the motion
  // const m = motionX + motionY;
  // // calc the previous motion value
  // const pm = prevMotionX + prevMotionY;
  // // compare them
  // if (m !== pm) {
  //   hasMotion = true;
  // } else {
  //   hasMotion = false;
  // }

  // if (hasMotion) {
  //   fill("#ff6347");

  //   // fill(255, 0, 255);
  // } else {
  //   fill("#808080");
  //   // fill(0, 0, 0);
  // }
  // rect(0, 0, width, height);
  // prevMotionX = motionX;
  // prevMotionY = motionY;
  // Save frame for the next cycle
  //if (video.canvas) {
  prevFrame.copy(
    video,
    0,
    0,
    video.width,
    video.height,
    0,
    0,
    video.width,
    video.height
  ); // Before we read the new frame, we always save the previous frame for comparison!
  //}
}

/**
 * calculate the distance between two points
 * In this case used to calculate the distance in color space
 * The normal dist() function uses sqrt. To speed things up we don't use it
 *
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} z1
 * @param {Number} x2
 * @param {Number} y2
 * @param {Number} z2
 */
function distSq(x1, y1, z1, x2, y2, z2) {
  const d =
    (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1);
  return d;
}

function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}

// Additional refs
// https://editor.p5js.org/ebenjmuse/sketches/rklr8q-yz
// // https://github.com/CodingTrain/website/blob/790412bd769dd466b407d3623dca9a0218894604/Tutorials/Processing/11_video/sketch_11_6_MotionDetection/sketch_11_6_MotionDetection.pde
