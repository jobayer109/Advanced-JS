/*
    Topics:
        A. Normal function declaration (add, sub)
        B. Array numbers add with code repetition: 'Bad practice'.
        C. Array numbers add with a single function: 'Best practice'.

*/
// --------------------------------------------------------------------------->>

// Add numbers
function add(a, b) {
  const result = a + b;
  //   console.log(result);
}
add(5, 9); // 14
add(12, 20); // 32

//
// Sub number:
function sub(a, b) {
  const result = a - b;
  //   console.log(result);
}
sub(12, 8); // 4
sub(58, 8); // 50

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
