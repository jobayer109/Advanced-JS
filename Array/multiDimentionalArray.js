/*
    We can create a 2D array in many ways:

       1. Using a nested for loop
       2. Array manually with the array literal notation
       3. Using Array.from() Method
       4. Using Array.fill() Method


*/

// General example:
const arr = [
  [78, 45, 87, 56],
  [84, 98, 65, 45],
  [69, 64, 87, 91],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // console.log("Element " + i + ": " + arr[i][j]);
  }
}

// ------------------------------------------------------------------------------>>

// Way - 1:---------------->> Using a nested 'for loop'.
let arr1 = [];
let row = 3;
let col = 4;
let h = 0;

for (let i = 0; i < row; i++) {
  arr1[i] = [];
  //   console.log(arr1[i]);
  for (let j = 0; j < col; j++) {
    arr1[i][j] = h++;
    // console.log(arr1[i][j]);
  }
}
// console.log(arr1);

// ------------------------------------------------------------------------------>>

// Way - 2:---------------->> Array manually with the array 'literal notation'.
let MathScore = [
  ["Bar", 20, 60, "A"],
  ["Foo", 10, 52, "B"],
  ["Joey", 5, 24, "F"],
  ["John", 28, 43, "A"],
  ["Liza", 16, 51, "B"],
];
// console.log(MathScore);

// ------------------------------------------------------------------------------>>

// Way - 3:---------------->> Using Array.from() Method
const rows = 3;
const columns = 4;
const matrix = Array.from({ length: rows }, () => new Array(columns).fill(1));
console.log(matrix);

// ------------------------------------------------------------------------------>>

// Way - 4:---------------->> Using Array.fill() Method
const roww = 3;
const column = 4;

const matrixx = Array(roww)
  .fill()
  .map(() => Array(column).fill(0));

console.log(matrixx);
