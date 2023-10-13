/*
    Topics of Functional Programming
        1. Pure function + Side effect
        2. Higher order function
        3. Function scope
        4. Closure
        5. Hoisting
        6. Callback function
        7. Instant Invoked Functional Expression (IIFE)
 */

// ---------------------------------------------------------------

//   1. Pure function
function sum(a, b) {
  return a + b;
}
sum(20, 10); // 30

// 1.1: Side effect
let limit = 100;
function changeLimit(limit) {
  limit = 500;
  return limit;
}
changeLimit(limit); // nothing
console.log(changeLimit(limit)); // 500

// Pure function related with array
// This is a pure function bcz, this function took the array as an argument as the function's normal behavior.
const arr = [1, 2, 3];
function change(arr, data) {
  arr.push(data);
}
// Impure and side effected function related with array
// This is a impure function bcz, this function change the array element outside of the function.
const array = [1, 2, 3];
function change(data) {
  array.push(data);
}
