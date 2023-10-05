/**
      1. using findIndex.
      2. using find method. And find() method is mutable. It will change 
         after traversing
 */

const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
];

//-----------------------------------------------

//  finIndex method apply
// const index = arr.findIndex((v) => {
//   return v.id === 2;
// });
// arr[1].value = 500;
// console.log(arr);

// ------------------------------------------------

// find() method apply
const obj = arr.find((v) => {
  return v.id === 4;
});

obj.value = 400;
// console.log(arr);

arr[3] === obj; // true

// ----------------------------------------------

// Object comparison
const a = {};
const b = {};

const c = a;

a === b; // false; Bcz, They are representing diff ref
a === c; // true; Bcz, c hold the a as reference.
