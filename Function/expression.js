/*
    Topics:
        A. what is function expression ?
        B. Syntax

*/
//

// -------------------------------------------------------------------------------->>

// Function expression syntax: Anonymous function
const addition = function (a, b) {
  return a + b;
};
const result = addition(3, 5); // 8
const another = addition(8, 7); // 15

// -------------------------------------------------------------------------------->>

// First class function:
function another1(a) {
  a(); // I'm first class function
}
const res = another1(function any() {
  console.log("I'm first class function");
});
