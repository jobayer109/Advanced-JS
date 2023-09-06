// Spread an array

const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6, 7, 8];
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(newArr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//------------------------------------------------------------------------->>

// Use the spread operator to spread the elements of an array as arguments to a function
const sumArray = [15, 12, 3];
function sum(a, b, c) {
  return a + b + c;
}
const res = sum(...sumArray);
console.log(res);

// Apply arrow function
const sum = (a, b, c) => a + b + c;
console.log(sum(...sumArray));
//------------------------------------------------------------------------->>

// Spread an object
const obj = {
  x: 1,
  y: 2,
  z: 3,
};

const newObj = { ...obj, p: 15, q: 18 };
console.log(obj);
console.log(newObj);
