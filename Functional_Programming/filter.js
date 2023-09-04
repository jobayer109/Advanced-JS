/*
   Topics:
        1. Array traverse using filter() method.
        2. Custom implementation of array traverse as same as filter() method.

    Notes:
        * forEach() can replace the original array element.
        * map() return a new array without evaluating the main array.
        * filter() traverse an array with logics and return a new array.
        * It always works on true false condition.
*/

// ----------------------------------------------------------------------------------->>

// 1. Array traverse using filter() method.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = arr.filter(function (value) {
  return value % 2 === 0;
});
filtered; // [ 2, 4, 6, 8, 10 ]

// ----------------------------------------------------------------------------------->>

// 2. Custom implementation of array traverse as same as filter() method.
function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const evenNum = filter(arr, function (value) {
  return value % 2 === 0; // [ 2, 4, 6, 8, 10 ]
});

const oddNum = filter(arr, function (value) {
  return value % 2 !== 0; // [ 1, 3, 5, 7, 9 ]
});

const bigNum = filter(arr, function (value) {
  return value > 6; // [ 7, 8, 9, 10 ]
});
