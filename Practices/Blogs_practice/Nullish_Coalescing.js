/*
        Nullish coalescing allows you to provide a default value when a variable is 
        null or undefined. It uses the ?? syntax to check if a value is null or 
        undefined, and provide a default value if it is.
*/

// Nullish Coalescing -----> ?? (double)
const value1 = null;
const value2 = undefined;
const value3 = "Hello!";

console.log(value1 ?? "Default value"); // Default value
console.log(value2 ?? "Default value"); // Default value
console.log(value3 ?? "Default value"); // Hello!

// ----------------------------------------------------------------------

// Optional chaining -----> ? (single)
const obj = {
  property1: {
    property2: {
      property3: "Hello!",
    },
  },
};

console.log(obj?.property1?.property2?.property3); // Hello!
console.log(obj?.property1?.property2?.property4); // undefined
// ----------------------------------------------------------------------
