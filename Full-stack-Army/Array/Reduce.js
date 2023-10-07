const numbers = [1, 2, 3, "", 4, NaN, 6, false, 7];

const result = numbers.reduce((acc, cur, index) => {
  if (cur) {
    acc += cur.toString();
  }
  return acc;
}, "");

console.log(result);
