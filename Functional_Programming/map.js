/*
   Topics:
        1. Array traverse using map() method.
        2. Custom implementation of array traverse as same as map() method.

    Notes:
        * forEach can replace the original array element.
        * map() return a new array without evaluating the main array.
*/

// ----------------------------------------------------------------------------------->>

// 1. Array traverse using map() method.
let arr = [1, 2, 3];
let sum = 0;
arr.map(function (value, index, arr) {
  //   console.log(value, index, arr);
  sum += value;
});

sum; // 6

// ----------------------------------------------------------------------------------->>

// 2. Custom implementation of array traverse as same as map() method.
// map() return a new array without evaluating the main array.

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = callback(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}
const add = map(arr, function (value, index, arr) {
  return value + 5; // [ 6, 7, 8 ]
});

const multiply = map(arr, function (value) {
  return value * value; // [ 1, 4, 9 ]
});

const mTen = map(arr, function (value) {
  return value * 10; // [ 10, 20, 30 ]
});

add; // [ 6, 7, 8 ]
multiply; // [ 1, 4, 9 ]
mTen; // [10, 20, 30];
