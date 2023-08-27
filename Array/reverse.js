// Array reverse:
// MDN Link: https://www.geeksforgeeks.org/reverse-an-array-in-javascript/

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Approach- 1:-------------------------------<< Using reverse() method
arr.reverse(); //  [  8, 7, 6, 5, 4, 3, 2, 1 ]

// ------------------------------------------------------------------------------>>

// Approach- 2: -------------------------------<< Custom way
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
  const temp = array[i]; // 1, 2, 3
  array[i] = array[array.length - 1 - i]; // 7, 6, 5
  array[array.length - 1 - i] = temp;
}

console.log(array); // Outputs: [7, 6, 5, 4, 3, 2, 1]
/*
    রিভার্স করার ধাপসমূহ:
        1. অ্যারে কে অর্ধেক লেন্থে করে নিতে হবে। কারণ, রিভার্স করলে শেষেরটা  আসবে প্রথমে 
           আর প্রথমেরটা যাবে শেষে । এরের মাঝখান পর্যন্ত এই কাজ চলবে। 
        2. temp variable er moddhe array er element guloke rakha.
        3. Array er element gulor length & index number komie ana.
        4. finally, length and index number komie ana element guloke 'temp' -er value
           bosie deya.
*/
// ------------------------------------------------------------------------------>>

// Fun with array reverse.
// Yes, I have done the fun task with array reverse.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let reversed = fruits.reverse();

for (let i = 0; i < reversed.length; i++) {
  let elements = reversed[i];
  reversed[i] = elements.split("").reverse().join("");
}
reversed; // [ 'ognaM', 'elppA', 'egnarO', 'ananaB' ]
