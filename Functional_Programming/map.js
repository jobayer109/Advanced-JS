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
