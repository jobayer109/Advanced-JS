/*
   Topics:
        1. We can pass function as an argument.
        2. We can return function from another function.
*/

// ----------------------------------------------------------------------------------->>

// 1. We can pass function as an argument.
function add(a, b) {
  return a + b;
}

function multiply(a, b, func) {
  var m = func(2, 5);
  return a + b * m;
}
multiply(3, 6, add); // 45
