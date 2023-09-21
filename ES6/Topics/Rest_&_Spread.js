/*
    Topics:
    -------
        A. Rest operator. 
        B. Spread operator.


    Notes:
    -------
        A. Rest operator.
        -----------------
            * When use three dots (...) in function parameter, then it called rest.
            * Write (...rest) operator at the last of all parameters 
              Example: (name, msg, ...rest).
            * Previously, we use arguments keyword. but it's not a array. 
            * But when we use Rest (...rest) operator, it will convert all 
            * arguments to an array. And we can apply all array method like others.
           
           
        B. Spread operator:
        -------------------
            * It breaks the group of value to a single value.
            * It creates something brand new like array, object.  
*/

//----------------------------------------------------------------------->>

//  A. Rest operator --------------------------
// Bad and complex approach -------------------
function getSum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
getSum1(1, 2, 3, 4, 5, 6); // 21

// Best and simple approach -------------------
const getSum2 = (...rest) => {
  let sum = 0;
  for (let value of rest) {
    sum += value;
  }
  return sum;
};
getSum2(1, 2, 3, 2); // 8

// Another best and simple approach -------------------
const anotherSum = (...rest) => {
  return rest.reduce((a, b) => a + b); // Reduce method
};
anotherSum(1, 2, 3); // 6

//----------------------------------------------------------------------->>

// B. Spread operator -------------------
const arr = [1, 2, 3, 4, 5, 6];
// console.log(...arr); // Single value: 1 2 3 4 5 6
const arr2 = [...arr];
arr2; // [1, 2, 3, 4, 5, 6];

// --------------------------------------

const obj = {
  a: 10,
  b: 56,
  c: 65,
};
// Copy of reference
const obj2 = obj; // Copy of reference
obj2; // {a: 10, b: 56, c: 65}

// Spread operator. Genuine copy.
const obj3 = { ...obj };
obj3.d = 12;
obj3; // {a: 10, b: 56, c: 65, d: 12}
