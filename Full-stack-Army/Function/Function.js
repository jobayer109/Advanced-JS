// Function Declarations:
function add(a, b) {
  return a + b;
}
const result = add(2, 3); // Calls the add function and stores the result in 'result'
console.log(result); // Outputs 5

// --------------------------------------------------------
// Arrow Functions:
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Outputs 20

// --------------------------------------------------------
// Higher-Order Functions:
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

const add = (a, b) => a + b;
const multiply1 = (a, b) => a * b;

console.log(operate(2, 3, add)); // Outputs 5
console.log(operate(2, 3, multiply1)); // Outputs 6
