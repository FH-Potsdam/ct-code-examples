/**
 * Using devicde motion seems to be a hassle.
 * Only made it work on iOS FireFox by using a selfsigned certificate
 * See https://stackoverflow.com/questions/35127383/npm-http-server-with-ssl
 * See https://web.archive.org/web/20190114150423/https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
 *
 *
 */
let x = 0;
let canvas = undefined;
let ax, ay, az;
function handleMotionEvent(event) {
  ax = event.accelerationIncludingGravity.x;
  ay = event.accelerationIncludingGravity.y;
  az = event.accelerationIncludingGravity.z;
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("sketch");
  // window.addEventListener("devicemotion", handleMotionEvent, true);
}

function draw() {
  background(255);
  text(`a x: ${ax} y: ${ay} z: ${az}`, 10, 10);
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
 * Make it work on safari
 */
document.body.onclick = function onClick() {
  // feature detect
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("devicemotion", handleMotionEvent, true);
        }
      })
      .catch(console.error);
  } else {
    // handle regular non iOS 13+ devices
  }
};
