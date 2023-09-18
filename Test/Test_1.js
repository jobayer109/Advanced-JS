"use strict";

function Operations(coef) {
  return {
    sum: (...args) => {
      return arguments[0] + coef;
    },
  };
}

const ops = Operations(0.1);
const result = ops.sum(1, 2, 3); // 0.2

// ------------------------------------------------------------------------->>

// Can't use arrow function in constructor except normal function.

const Num = function () {
  this.getNum = () => 10;
};

Num.prototype.getNum = () => 20;

const num = new Num();

// console.log(num.getNum());

// ------------------------------------------------------------------------->>

// Variable scope in function call

// console.log(foo());
// let bar = "bar";
var bar = "bar";

function foo() {
  return bar;
}

bar = "baz";

// console.log(foo());

// ------------------------------------------------------------------------->>

// The typeof operator returns undefined for not defined variables.

function foo() {
  return "hello";
}

typeof foo; // function or undefined

// ------------------------------------------------------------------------->>

function foo(bar, getBar = () => bar) {
  var bar = 10;
  console.log(getBar());
}

// foo(5); // 5

// ------------------------------------------------------------------------->>

// Same name isn't allow for variable and function:
// var num = 8;

// function num() {
//   return 10;
// }

// console.log(num); // error.

// ------------------------------------------------------------------------->>
