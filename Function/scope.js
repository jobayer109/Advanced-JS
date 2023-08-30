/*
    Topics:
        A. Normal scope
        B. Functional scope
            1. normal way.
            2. advance way.
*/
//

// -------------------------------------------------------------------------------->>

// Normal scope: 1
var a = "Global scope";

{
  a; // abc
}

// Normal scope: 2
if (true) {
  a; // abc
}

// Normal scope: 3
if (true) {
  var a = 10;
  a; // 10
}

// -------------------------------------------------------------------------------->>

// Functional scope
// simple functional scope:
function x() {
  //   var a = 55;
  function y() {
    var a = 88;
    console.log(a);
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
    console.log(`Both are dividable by 3 and 5`);
  } else {
    console.log("Invalid data found");
  }
}

func(16);
