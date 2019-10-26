var foo = 0;
const bah = 1;
let boom = 2;

const pi = 3; // number
const pie = 42.5; // also a number
const cake = true; // boolean
const cookie = false; // also boolean
const lollipop = [1, 2, 3, 4]; // an array
const sasquatsch = { name: 'bob' }; // an object with properties
const nope = undefined; // not defiend but "container" exists
const nono = null; // a nothing type
const limbo = 'a'; // a string in single quotes
const lambo = 'place'; // a string in double quotes
const lombo = `${limbo} ${lambo} somewhere`; // a template literal string

let something = false;
let somethingElse = true;
// @ts-ignore
if (something === true) {
  console.log('Will not log');
} else if (somethingElse === true) {
  console.log('logs only when "something" is false');
} else {
  console.log('Catch all the rest');
}

const arrOfNumbs = [1, 3, 4, 8, 9, 9];
for (let i = 0; i < arrOfNumbs.length; i++) {
  const result = arrOfNumbs[i] * 100;
  console.log(arrOfNumbs[i], '<- access elements in the array');
  console.log(result, '<- The result of the calculation');
}

const arrOfObjects = [
  { name: 'foo', value: 4 },
  { name: 'bah', value: 3 },
  { name: 'baz', value: 1 },
];
for (const item of arrOfObjects) {
  console.log(item, '<- each item in the array of objects');
  console.log(item.name, '<- acces properties of item');
}

const object = {
  name: 'foo',
  value: 2,
  thing: true,
  arr: [1, 2, 3],
  obj: { num: 12, bool: false },
};
for (const key in object) {
  console.log(key, '<- the key/name of the property');
  console.log(object[key], '<- the value of the property accessed by its name');
}

let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

const otherArrOfNumbs = [1, 3, 4, 8, 9, 9];
otherArrOfNumbs.forEach((ele, i, arr) => {
  console.log(ele, '<- the element');
  console.log(i, '<- the current index');
  console.log(arr, '<- the full array');
});

function runThatThing() {
  console.log('Inside the function');
}
runThatThing(); // <- Function call

const alsoAFunction = function() {
  console.log('Inside the function');
};
alsoAFunction();

const andMoreFunction = () => {
  console.log('Inside the function');
};
andMoreFunction();

const andSomeFunctionArgs = (num, foo, bah = 1) => {
  console.log(num, foo, bah, 'Inside a function');
};
andSomeFunctionArgs(1, 23);

const andSomeReturns = (val) => {
  return val;
};
const res = andSomeReturns('value of function');
console.log(res);

const moreReturnVals = (val) => val;
console.log(moreReturnVals('hello world'));

const andLessParenthesis = (val) => val;
console.log(andLessParenthesis('no parens'));

const wired = () => () => () => () => () => (val) => val * 2;
console.log(wired()()()()()(2)); // ¯\_(ツ)_/¯

(() => {
  console.log('iife -> Imidiatly invoked function expression');
})();
