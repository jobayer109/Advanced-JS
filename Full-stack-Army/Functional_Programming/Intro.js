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
