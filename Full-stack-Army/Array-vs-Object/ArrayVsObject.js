// Compiling__________________________________Result:
/*
    Array time: 73.246ms
    Object time: 0.009ms
*/

const arr = [];
const obj = {};

for (let i = 0; i < 5000000; i++) {
  let o = {
    id: i,
    value: i,
  };
  arr.push(o);

  obj[i] = o;
}

// ---------------------------------------------------------
// Array time complexity test.
console.time("Array time");
const targetID = 4999998;
const getObj = arr.find((item) => item.id === targetID);
getObj.value = 555;
console.log(getObj);
console.timeEnd("Array time");

// ---------------------------------------------------------
// Object time complexity test.
console.time("Object time");
obj[targetID].value = 999;
console.timeEnd("Object time");

// Compiling__________________________________Result:
/*
    Array time: 73.246ms
    Object time: 0.009ms
*/
