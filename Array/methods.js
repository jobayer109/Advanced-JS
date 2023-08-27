/*
    Array methods:
    ------------------>
        Array length
        Array toString()
        Array pop() 
        Array push()
        Array shift()
        Array unshift()
        Array join()
        Array delete()
        Array concat()
        Array flat()
        Array splice()
        Array slice()
        Array fill()
        Array from()
*/

//
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Length
let lengths = fruits.length; // 4

// --------------------------------------------------------------------->

// toString()
let toString = fruits.toString(); // Banana,Orange,Apple,Mango

// --------------------------------------------------------------------->

// Join()
let joined1 = fruits.join(""); // BananaOrangeAppleMango
let joined2 = fruits.join(" "); // Banana Orange Apple Mango
let joined3 = fruits.join(" * "); // Banana * Orange * Apple * Mango

// --------------------------------------------------------------------->

// Delete()
// Using delete leaves undefined holes in the array.
let deleted = delete fruits[1]; // [ 'Banana', <1 empty item>, 'Apple', 'Mango' ]

// --------------------------------------------------------------------->

// concat()
// The concat() method creates a new array.
// The concat() method can take any number of array arguments.
// The concat() method can also take strings as arguments
// Example: 1
let boys = ["Ahmed", "Joshim"];
let girls = ["Taima", "Karina"];
let concatenated = boys.concat(girls); // [ 'Ahmed', 'Joshim', 'Taima',  'Karina' ]

// Example: 2
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

// Example: 3
const arr4 = ["Emil", "Tobias", "Linus"];
const childrens = arr4.concat("Peter"); // [ 'Emil', 'Tobias', 'Linus', 'Peter' ]

// --------------------------------------------------------------------->

// flat()
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, [18, 15]],
];
const flatted = myArr.flat(); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 18, 15 ] ]
const flattedMore = flatted.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 18, 15];

// --------------------------------------------------------------------->

// splice()
// We talk about this in insertRemove.js file.

// --------------------------------------------------------------------->

// slice() method
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

const fevFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const sliced1 = fevFruits.slice(2); // [ 'Lemon', 'Apple', 'Mango' ]
const sliced2 = fevFruits.slice(1, 4); // [ 'Orange', 'Lemon', 'Apple' ]

// --------------------------------------------------------------------->

// Finding Max and Min Values in an Array:

const minMax = [14, 5, 6, 79, 44, 6, 1, 22];

for (i = 0; i < minMax.length; i++) {
  let max = Math.max(Number(minMax.toString()));
  //   console.log(max);
}

// --------------------------------------------------------------------->

// Search a value in the array

const arraySrc = [14, 5, 6, 79, 44, 6, 1, 22];

let find = 79;
let isFound = false;

for (i = 0; i < arraySrc.length; i++) {
  if (arraySrc[i] === find) {
    // console.log("Yes, got the number in:", i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  // console.log("No data found");
}

//Example-2:
const phones = ["Helio", "Samsung", "Apple", "Nokia", "Techno", "Sony"];

let findPhone = "Samsung";
let isFounds = false;

for (let i = 0; i < phones.length; i++) {
  if (phones[i] === findPhone) {
    console.log("Found the phone in: ", i);
    isFounds = true;
    break;
  }
}

if (!isFounds) {
  console.log("No phone data related that you searched");
}

// --------------------------------------------------------------------->

// Array fill()
const numArr = [1, 3, 5, 6, 7, 8, 4];
numArr.fill(0); // [  0, 0, 0, 0, 0, 0, 0 ]
numArr.fill("Jo"); // [ 'Jo', 'Jo', 'Jo', 'Jo', 'Jo', 'Jo', 'Jo' ]
numArr.fill(true); // [   true, true, true, true, true, true, true ]
// console.log(numArr);

// --------------------------------------------------------------------->

// Array from()
let x = [1, 2, 3];
let y = Array.from(x);

y[0] = 10;

console.log(x); // [ 1, 2, 3 ]
console.log(y); // [ 10, 2, 3 ]

// --------------------------------------------------------------------->
