/*
   Topics:
        1. Array traverse using reduce() method.
        2. Custom implementation of array traverse as same as reduce() method.

    Notes:
        * forEach() can replace the original array element.
        * map() return a new array without evaluating the main array.
        * reduce() traverse an array with prev and current.
*/

// ----------------------------------------------------------------------------------->>

// 1. Array traverse using reduce() method.
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce(function (prev, current) {
  return prev + current;
}, 100); // Initial value is optional

sum; // 121

//----------------------<<
const max = arr.reduce(function (prev, current) {
  return Math.max(prev, current);
});
max; // 6

// ----------------------------------------------------------------------------------->>

// 2. Custom implementation of reduce() method.
