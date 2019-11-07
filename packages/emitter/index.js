let x = 0;
let canvas = undefined;
const emitter = new Emitter();
emitter.on("action", (data) => {
  console.log(`hello action on ${JSON.stringify(data)}`);
  fill(data.fill);
  rect(random(width), random(height), 10, 10);
});

function setup() {
  canvas = createCanvas(100, 100);
  canvas.parent("sketch");

  background(255);
}

function draw() {}

function mousePressed() {
  emitter.emit("action", { foo: "bah", fill: random(255) });
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
 * Taken from
 * https://dev.to/jochemstoel/write-your-own-chainable-event-emitter-class-for-node-and-browser-5gp
 */
function Emitter() {
  if (!(this instanceof Emitter)) {
    throw new TypeError(
      "Emitter can not be called as a function. Create an instance by calling new Emitter()",
    );
  }

  let eventHandlers = [];
  /**
   * Add event listener.
   * @param {string} event type
   * @param {function} callback function
   */
  this.addEventListener = (type, fn) => {
    eventHandlers.push([type, fn]);
  };
  /**
   * Remove event listener.
   * @param {string} event type
   * @param {function} callback function
   */
  this.removeEventListener = (type, fn = true) => {
    eventHandlers = eventHandlers.filter(
      (handler) =>
        !(handler[0] === type && (fn === true ? true : handler[1] == fn)),
    );
  };

  /**
   * Dispatch event.
   * @param {string} event type
   * @param {any} event data
   */
  this.dispatchEvent = (type, data) => {
    const handlers = eventHandlers.filter((handler) => handler[0] === type);
    handlers.forEach((handler) => handler[1](data, type));
    // handlers.filter(handler => new RegExp("^" + handler[0].split("*").join(".*") + "$").test(type)).forEach(handler => handler[1](data, type))
  };

  /**
   * Get list of event handlers (of a type) or all if type is not specified
   * @param {string} [event type] (optional)
   */
  this.getEventListeners = (type) => {
    if (!type) return eventHandlers;
    let fns = [];
    eventHandlers
      .filter((handler) => handler[0] == type)
      .forEach((handler) => fns.push(handler[1]));

    return fns;
  };
  /**
   * Clear event listeners
   * @param {string} [event type] (optional)
   */
  this.clearEventListeners = () => {
    eventHandlers = [];
  };
  /**
   * Shortcut for addEventListener.
   * @param {string} event type
   * @param {function} callback function
   */
  this.on = (type, fn) => {
    this.addEventListener(type, fn);
    return this; /* chain */
  };

  /**
   * Shortcut for removeEventListener
   * @param {string} event type
   * @param {function} callback function
   */
  this.off = (type, fn) => {
    this.removeEventListener(type, fn);
    return this; /* chain */
  };

  /**
   * Shortcut for dispatchEvent
   * @param {string} event type
   * @param {any} event data
   */
  this.emit = (type, data) => {
    this.dispatchEvent(type, data);
    return this; /* chain */
  };

  /**
   * Shortcut for clearEventListeners
   * @param {string} event type
   */
  this.clear = (type) => {
    this.clearEventListeners(type);
    return this;
  };

  /**
   *
   * @param {string} [type]
   */
  this.list = (type) => this.getEventListeners(type);
}
