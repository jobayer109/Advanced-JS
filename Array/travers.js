// Array Traversing:
// Array er moddhe loop chalie tar sob elements k touch kore seguloke die kono operation ghotanoke array traversing bole.

//
const arr = [10, 21, 30, 33, 50];

arr[2]; // Output: 30 (element at index 2)
arr[10]; // Output: undefined (index 10 is out of range)
arr[-1]; // Output: undefined (negative index is out of range)

//
//  Increment element's value
for (i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 2;
}
arr; // [ 12, 22, 32, 42, 52 ]

//
//  Element's sum
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
sum; //

//
// Print odd number of an array
const array = [10, 24, 35, 36, 51];

for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
  // else if (array[i] !== 0) {
  //   console.log(array[i]);
  // }
}
