const numbers = [1, 2, 3, "", 4, NaN, 6, false, 7];

// -----------------------------------------------------------
// Default value -> ""
const result = numbers.reduce((acc, cur, index) => {
  if (cur) {
    acc += cur.toString();
  }
  return acc;
}, "");

result; // 123467

// -----------------------------------------------------------
// Default value -> []
const result2 = numbers.reduce((acc, cur) => {
  if (cur) {
    acc.push(cur.toString());
  }
  return acc;
}, []);

result2; // [ '1', '2', '3', '4', '6', '7' ]
