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
sum; // 154

//
// Print odd number of an array
for (i = 0; i < arr.length; i++) {
  let newArr = [];
  if (arr[i] % 2 !== 0) {
    arr[i] = newArr.push(arr[i]);
    console.log(newArr);
  } else {
    console.log("Even number");
  }
}
