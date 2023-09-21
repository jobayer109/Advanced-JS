/*
   Topics:
        1. Bad practice and code duplication.
        2. Callback function and best practice.
*/

// ----------------------------------------------------------------------------------->>

// 1. Bad practice and code duplication.
// Example for add two numbers
function sample(a, b) {
  let c = a + b;
  let d = a - b;

  let result = (c, d);
  // this code is fixed for only one function 'c()'. If I want to subtraction,   multiply, division, modulus; I have to declare same code for different different function which create code duplication. This is bad practice.
  return result;
}

function c(a, b) {
  return a + b;
}

let result = sample(5, 8);
result; // 10;

// ----------------------------------------------------------------------------------->>

// 2. Callback function best practice.

function sampleFunc(a, b, callback) {
  let c = a + b;
  let d = a - b;

  let result = callback(c, d);
  return result;
}

function add(a, b) {
  return a + b;
}

const result1 = sampleFunc(5, 8, add); // passed a previously defined function
result1; // 10

const result2 = sampleFunc(5, 8, function (c, d) {
  // Pass a function directly for subtraction
  return c - d;
});
result2; // 16

const result3 = sampleFunc(10, 8, function (c, d) {
  // Pass a function directly for subtraction
  return c * d;
});
result3; // 36
