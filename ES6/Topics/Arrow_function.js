/*
    Topics:
    -------
        A. Declare arrow function vs normal function.
        B. Arrow function and "this" keyword. what matters?


    Notes:
    -------
        B. Arrow function and "this" keyword:
        -------------------------------------
            * 
*/

//----------------------------------------------------------------------->>

// A. Declare arrow function vs normal function:

// Normal function:
function normal(a, b) {
  return a + b;
}
const normalSum = normal(10, 5); // 15

//----------------------------<

// Arrow function

// single line arrow function
const singleArrow = (a, b) => a + b; // auto return by the function.

// Multi-line arrow function:
const multiArrow = (a, b) => {
  return a - b;
};

//----------------------------------------------------------------------->>
