/*
   Topics:
        1. Array traverse using reduce() method.
        2. Custom implementation of array traverse as same as reduce() method.

    Note that the function takes 4 arguments:
        * The total (the initial value / previously returned value)
        * The item value
        * The item index
        * The array itself

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
}); // Initial value is optional

sum; // 21

//----------------------<<
const max = arr.reduce(function (prev, current) {
  return Math.max(prev, current);
});
max; // 6

//---------------------------------------------------------------------------->>
// Different option of reduce() method.
const numbers = [45, 4, 9, 16, 25];

let sum1 = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
sum1; // 99

//---------------------------------------------------------------------------->>

// 2. Custom implementation of reduce() method.
