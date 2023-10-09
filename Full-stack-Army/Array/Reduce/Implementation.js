function myReduce(array, callback, init) {
  let acc = init;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

// Test-1
const numArr = [1, 2, 3, 4, 5];
const result1 = myReduce(numArr, (a, b) => a + b, 0);
result1; // 15

// Test-2
const dataArr = [1, 2, 3, undefined, "", 4, "string", false, 5, NaN, 6];
const result2 = myReduce(
  dataArr,
  (acc, cur) => {
    if (cur && typeof cur === "number") {
      acc.push(cur);
    }
    return acc;
  },
  []
);

result2; // [ 1, 2, 3, 4, 5, 6 ]
