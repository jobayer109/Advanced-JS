const n = 16;

// Approach-1:
if (n % 2 === 0) {
  console.log("EVEN Number");
} else {
  console.log("ODD Number");
}

// Best Practice
// Best Practice
// Ternary operator: For single logic it's a best practice
const result = n % 2 === 0 ? "EVEN Number" : "ODD Number";
console.log(result);
