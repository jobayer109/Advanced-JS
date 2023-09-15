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

// ------------------------------------------------------------------->>

const marks = [478, 429, 434, 362, 394, 360, 496, 495, 485, 473, 215, 389];

const result = marks.sort(function (a, b) {
  return b - a;
});

result; // [496, 495, 485, 478, 473, 434, 429, 394, 389, 362, 360, 215];

// ------------------------------------------------------------------->>

// Assigning a function to a variable
const greets = function (name) {
  `Hello,  ${name}!`;
};

// Calling the function
greets("Jobayer"); // Output: Hello, John!

// Functions are objects, so you can also add properties to them
greets.message = "Welcome object"; // Adding a property to the function

greets.message; // Output: Welcome
greets; // [Function: greets] { message: 'Welcome object' }

// ------------------------------------------------------------------->>

const str = "   I love      Bangladesh    ";
// console.log(str.trim());

// ------------------------------------------------------------------->>

let i = 0;
while (i <= 10) {
  i; // Print loop result successfully
  i += true;
}
i; // 11

// ------------------------------------------------------------------->>

// let j = 0;
// while (j <= 10) {
//   // j; // Infinity loop
//   j += false;
//   // j; // Infinity loop
// }
// // console.log(j); //

// ------------------------------------------------------------------->>

// Functions:

// Number: 1
function func() {
  // console.log("I am function");
}
func();

// Number: 2
const func5 = function () {
  // console.log("I am function");
};
func5();

// Number: 3
const arrowFunc = () =>
  // console.log("I am function");
  arrowFunc();

// Number: 4
const arrowFunc1 = (a) => {
  // console.log("I am function");
};
arrowFunc1(3);

// Number: 5 (in obj)

const funcObj = {
  print: function () {
    // console.log("I am function");
  },
};
funcObj.print();

// Number: 6 (in obj)
const funcObj1 = {
  print: () => {
    // console.log("I am function");
  },
};
funcObj1.print();

// Number: 7 (in obj)
const funcObj2 = {
  print() {
    // console.log("I am function");
  },
};

funcObj2.print();

// ------------------------------------------------------------------->>

// Difference between normal and arrow function use-case of "this"
// const object1 = {
//   y: "Tahmina",
//   apple: () => {
//     function print() {
//       function newArrow() {
//         console.log(this);
//       }
//       newArrow();
//     }
//     print();
//   },
// };

//----------------------
const person = { nm: "John" };
const sayHello = () => {
  console.log(`Hello, ${person.nm}`);
};

sayHello(); // Outputs: Hello, undefined (this.name is undefined)

//----------------------
const persons = { nms: "John" };
function sayHello1() {
  console.log(`Hello, ${this.person.nms}`);
}

// sayHello1(); // Outputs: Hello, undefined (this.name is undefined)

// ------------------------
const object2 = {
  x: "Taima",
  print1() {
    // let self = this;
    console.log(self);
    const z = "hello Z";
    const another = () => {
      const more = () => {
        console.log(this);
      };
      more();
    };
    another();
  },
};
// object2.print1();

// ------------------------------------------------------------------->>

// Prototype and Prototypical inheritance
const myArr = new Array();
myArr.push(1);
myArr.push(2);
myArr.push(3);
console.log(myArr);

// ------------------------------------------------------------------->>

function foo() {
  console.log(this);
}

function callFoo(fn) {
  fn();
}

let obj = { foo };

callFoo(obj.foo);
