// var a = "TOP";

// function func() {
//   var a = 10;
//   a = 20;
//   console.log(a);
// }
// func();

//
//

var x = "Global";
{
  var x = "Block";
}
x = "Change " + x;
// console.log(x);

let y = 10;
{
  let y = 12;
}

y = 15;

// console.log(y);

var p = 2; // Allowed
var p = 3; // Allowed
// p = 4; // Allowed
// console.log(p);

//
//
const arr = [1, 23, 5, 54, 8, 7];
const res = arr.push((x = -1));
// console.log(res);

// // console.log("5" + undefined);

var name = "Jobayer Ahned";
function A() {
  B();
  var a = "I'm function A";
  // console.log(a);
}
function B() {
  C();
  var b = "I'm function B";
  // console.log(b);
}
function C() {
  // console.log("Hello " + name);
  var c = "I'm function C";
  // console.log(c);
}
A();

// --------------------------------------------------------->>

var n = 10;

function A() {
  var n = 12;
}
// --------------------------------------------------------->>

function A(x = 10, y = 12) {
  return x + y;
}
const res1 = A();
// --------------------------------------------------------->>

const greet = function (name) {
  return `Hello, ${name}!`;
};
const message = greet("John");
message; // "Hello, John!"
// --------------------------------------------------------->>

const arr1 = [1, 23, 5, 54, 8, 7];
arr1[-1] = 2;
arr1; // [ 1, 23, 5, 54, 8, 7, '-1': 2 ]

// --------------------------------------------------------->>
// Recursive function
function recursive(n) {
  if (n === 0) {
    return;
  }
  console.log(`I am recursive function`);
  recursive(n - 1);
}
// recursive(5);

//
function test(n) {}

// test(5);
// test(10);

//
const print = () => {
  for (let i = 0; i < n; i++) {
    console.log("Hello");
  }
};
print(2);
