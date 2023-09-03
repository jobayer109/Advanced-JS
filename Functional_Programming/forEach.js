/*
   Topics:
        1. Array traverse using forEach method.
        2. Custom implementation of array traverse as same as forEach.
*/

// ----------------------------------------------------------------------------------->>

// 1. Array traverse using forEach method.
const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach(function (value, index, arr) {
  // It has taken a callback function
  //   console.log(value, index, arr);
  sum += value;
});
sum; // 15

// ----------------------------------------------------------------------------------->>

// 2. Custom implementation of array traverse as same as forEach.

const array = [5, 6, 2, 4, 6, 9];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let sum1 = 0;
forEach(array, function (value, index, array) {
  //   console.log(value, index, array);
  sum1 += value;
  array[index] = value + 1;
});

sum1; // 32
array; // [ 6, 7, 3, 5, 7, 10 ]
