/*
    Topics:
        A. We can use it to access function operational result from outside of func.
        B. After type "return"; next line code won't execute anymore.
        C. Multiplication of random number in arguments.

*/
//

// -------------------------------------------------------------------------------->>

// Wrong way of accessing func data
function wrongFunc() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  console.log(sum); // In function the result is '15'
}
const result1 = wrongFunc(3, 9, 3); // undefined
result1; // Outside of the function the result is 'undefined'

// -------------------------------------------------------------------------------->>

// Right way of accessing func data.
function rightFunc() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum; // Return the value for accessing data from outside of the function.
}
const result2 = rightFunc(3, 4, 3);
result2; // 10
