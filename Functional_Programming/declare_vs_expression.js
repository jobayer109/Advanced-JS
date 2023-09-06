//
//

// Normal function declaration
ABC();
function ABC() {
  console.log("I am pure function");
}
ABC();

console.log(newFunction); // undefined
//
// Function expression
var newFunction = function abc() {
  console.log("This is function expression");
};

//
/*
    Execution context:
    ------------------
      * creational phase: 
            ABC = ref
            newFunction = undefined

      * Execution phase:
          -  I am pure function
          -  Throw error  // Bcz, newFunction isn't function in 11 number line.

*/
