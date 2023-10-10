function operate(num1, num2, operation) {
  return operation(num1, num2);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(operate(2, 3, add)); // Outputs 5
console.log(operate(2, 3, multiply)); // Outputs 6
