/*
    What is functional programming?
        - Function is first class citizen.
        - We can treat function as value.


    Benefits:
    ---------
        * We can store function in a variable.
        * We can store function in an array or in an object.
        * We can pass  a function as an argument.
        * We can return a function from an another function.
 */

// Prove:
function testFunction() {
  console.log("This is a function");
}
const fn = testFunction;
fn();

// In an array
const arr = [fn, testFunction];
arr[0]();

// In an Object
const obj = {
  fn: testFunction,
};
obj.fn();

// Return a function from an another function.
function another() {
  return fn;
}
console.log(another());
