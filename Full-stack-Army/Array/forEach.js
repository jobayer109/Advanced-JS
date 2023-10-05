const arr = [1, 2, 3, null, false, 4, "", "string", 5, 6];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }
  if (arr[i] === undefined) {
    count++;
  }
}

arr.length -= count;
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
