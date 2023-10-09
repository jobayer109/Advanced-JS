/*
    Compare in______________________
        * map, 
        * filter and 
        * reduce method
*/

const arr = [];

// Filter and map method applied
for (let i = 1; i < 5000000; i++) {
  arr.push(i);
}

console.time("non-optimized");
arr.filter((item) => item % 2 === 0).map((res) => res * 2);
console.timeEnd("non-optimized");

// -------------------------------------------------------------------

// Reduce method applied
console.time("optimized");
arr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    arr.push(cur * 2);
  }
  return acc;
}, 5000000);
console.timeEnd("optimized");
