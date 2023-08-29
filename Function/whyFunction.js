/*
    Topics:
        A. Array numbers add with code repetition: 'Bad practice'.
        B. Array numbers add with a single function: 'Best practice'.

*/
// --------------------------------------------------------------------------->>

// Array number element add and sub with 'code repetition':
const arr1 = [4, 5, 2, 3, 6, 3];
const arr2 = [45, 6, 7, 4, 7];
const arr3 = [64, 6, 76, 4, 47, 7];

// arr1
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
sum1; // 23

// arr2
let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}
sum2; // 69

// arr3
let sum3 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}
sum3; // 204

// --------------------------------------------------------------------------->>

// Array numbers add with a single function: 'Best practice'.
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumOfArray([4, 5, 2, 3, 6, 3]); // 23
sumOfArray([45, 6, 7, 4, 7]); // 69
sumOfArray([64, 6, 76, 4, 47, 7]); // 204
