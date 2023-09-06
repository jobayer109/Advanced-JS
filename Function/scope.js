/*
    Topics:
        A. Normal scope
        B. Functional scope
            1. normal way.
            2. advance way.
            3. functional scope chain
*/
//

// -------------------------------------------------------------------------------->>

// Normal scope: 1
var p = "Global scope";

{
  p; // abc
}

// Normal scope: 2
if (true) {
  p; // abc
}

// Normal scope: 3
if (true) {
  var p = 10;
  p; // 10
}

// -------------------------------------------------------------------------------->>

// Functional scope
// simple functional scope:
function x() {
  var a = 55;
  function y() {
    var a = 88;
    return a; // 88
  }
  y();
}
x();

// -------------------------------------------------------------------------------->>

// Advance functional scope:
function func(n) {
  function func1() {
    return n % 3 === 0;
  }
  function func2() {
    return n % 5 === 0;
  }

  if (func1() && func2()) {
    return `Both are dividable by 3 and 5`;
  } else {
    return "Invalid data found";
  }
}

func(16);

// -------------------------------------------------------------------------------->>

// Functional scope chain:

var a = 11;

function A() {
  var b = 12;
  function B() {
    var c = 15;
    console.log(c);
  }

  function C() {
    var d = 56;
    console.log(d);
  }

  console.log(b); // 12
  D(b); // 13
  B(); // 15
  C(); // 56
}

function D(n) {
  return n + 1; // 13
}

A();
