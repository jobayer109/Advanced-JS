/*
   Topics:
        1. Bad practice and code duplication.
        2. Callback function best practice.
*/

// ----------------------------------------------------------------------------------->>

// 1. Bad practice and code duplication.
// Example for add two numbers
function sample(a, b) {
  let c = a + b;
  let d = a - b;

  let result = sum(c, d);
  // this code is fixed for only one function 'sum()'. If I want to subtraction,        multiply, division, modulus; I have to declare same code for different different function which create code duplication. This is bad practice.

  return result;
}

function sum(a, b) {
  return a + b;
}

let result = sample(5, 8);
result; // 10;
