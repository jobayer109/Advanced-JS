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
    return "Hello";
  }
};
// print(2);

// --------------------------------------------------------->>

obj1; // undefined; var keyword
obj1; // Cannot access 'obj1' before initialization; const keyword
obj1; // Cannot access 'obj1' before initialization; let keyword

var obj1 = new Object();
obj1.name = "Jobayer";
obj1.age = 27;

obj1; // { name: 'Jobayer', age: 27 }

// --------------------------------------------------------->>

// array; // undefined; var keyword
// array; // Cannot access 'array' before initialization; const keyword
// array; // Cannot access 'array' before initialization; let keyword

const array = Array();
array.push(12, 15);
array[2] = 13;
array[6] = 13;
// array.splice(2, 0, 88);
// array.splice(6, 0, 40);
array.splice(3, 3);

array;

// --------------------------------------------------------->>
const hello = {
  method: function myFunc() {
    // console.log(this); // It refers the global object.
  },
};

hello.method();

// --------------------------------------------------------->>
// Array sorting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sorted1 = fruits.sort(); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

let neWFruits = [];
const process = sorted1.forEach(function (value) {
  neWFruits.push(value.split("").reverse().join(""));
});
neWFruits; // [ 'elppA', 'ananaB', 'ognaM', 'egnarO' ]

// --------------------------------------------------------->>

// Number sorting
const numArr = [1, 6, 8, "4", 9, 3, "5", 2, -1, -7, -9, 12];
// 1 6 4 8
const sorted = numArr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

sorted; // [ -9, -7,  -1,  1, 2, 3,  '4', '5', 6, 8, 9,  12 ]

// ------------------------------------------------------------------->>
if (1 === -1) {
  // console.log("Ok");
} else {
  // console.log("Not ok");
}

//
Number("0"); // 0

// ------------------------------------------------------------------->>

// Array methods

// forEach method
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}

myFunction(txt);
