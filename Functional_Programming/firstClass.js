/*
   Topics:
        1. A function can be stored in a variable.
        2. A function can be stored in an Array.
        3. A function can be stored in an Object.
        4. We can create function as need.
        5. We can pass function as an argument.
        6. We can return function from another function.
*/

// ----------------------------------------------------------------------------------->>

function add(a, b) {
  return a + b;
}
add(2, 5); // 7

// 1. A function can be stored in a variable.
var sum = add;
sum(5, 5); // 10
typeof sum; // function

// ----------------------------------------------------------------------------------->>

// 2. A function can be stored in an Array.
const arr = [2, 9, 2023];
arr.push(sum);
arr[3](5, 8); // 13

// ----------------------------------------------------------------------------------->>

// 3. A function can be stored in an Object.
const obj = {
  sum: add,
};
obj.sum(3, 6); // 9

// ----------------------------------------------------------------------------------->>

// 4. We can create function as need.

setTimeout(function needFunc() {
  console.log("I can a function as my need");
}, 1000);

// ----------------------------------------------------------------------------------->>

// 5. We can pass function as an argument.

function argFunc(callMe) {
  callMe();
}
argFunc(function arg() {
  console.log("I'm passing as argument. I'm first-class function");
});
// ----------------------------------------------------------------------------------->>

// 6. We can return function from another function.
