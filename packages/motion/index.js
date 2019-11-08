/**
 * Using devicde motion seems to be a hassle.
 * Only made it work on Brave on iOS by using a selfsigned certificate
 * See https://stackoverflow.com/questions/35127383/npm-http-server-with-ssl
 * See https://web.archive.org/web/20190114150423/https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
 *
 *
 */

let canvas = undefined;
let ax, ay, az;
let ball = undefined;
function handleMotionEvent(event) {
  ax = event.accelerationIncludingGravity.x;
  ay = event.accelerationIncludingGravity.y;
  az = event.accelerationIncludingGravity.z;
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("sketch");
  ball = new Ball(width / 2, height / 2);
  // window.addEventListener("devicemotion", handleMotionEvent, true);
}

function draw() {
  background(255);
  if (ax !== undefined && ay !== undefined && az !== undefined) {
    console.log(ax, ay, az);
    ball.update(ball.x + ax, ball.y + ay * -1);
    ball.display();
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    if (canvas === undefined) {
      throw new Error("Could not find your canvas");
    }
    saveCanvas(canvas, "sketch", "png");
  }
}

function Ball(_x, _y) {
  if (!(this instanceof Ball)) {
    throw new TypeError(
      'Ball can not be called as a function. Call it like this "const ball = new Ball(x,y)"',
    );
  }
  this.x = _x;
  this.y = _y;
  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  };
  this.update = function(__x, __y) {
    this.x = __x;
    this.y = __y;
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  };
}
/**
 * Make it work on safari
 */
const button = document.querySelector("button#allow");
if (button === undefined) {
  throw new Error("button does not exist");
} else {
  button.onclick = function onClick() {
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
}
