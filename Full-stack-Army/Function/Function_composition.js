function sum() {
  return a + b;
}

function sub() {
  return a - b;
}

function multiply() {
  return a * b;
}

const a = 10;
const b = 15;

const result = Math.abs(multiply(sum(a, b), sub(a, b))); // 150
