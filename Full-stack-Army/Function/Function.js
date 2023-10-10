// Function Declarations:
function add(a, b) {
  return a + b;
}
const result = add(2, 3); // Calls the add function and stores the result in 'result'
console.log(result); // Outputs 5

// --------------------------------------------------------
// Higher-Order Functions:
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(operate(2, 3, add)); // Outputs 5
console.log(operate(2, 3, multiply)); // Outputs 6
