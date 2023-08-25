// Search element means search a particular element in the array.

const arr = [54, 8, 87, 9, 65, 5, 88, 69, 12, 58];

let find = 16;
let isFound = false;

for (i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("Element found in index: " + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not found");
}
