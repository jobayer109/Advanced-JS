/*
    Topics:
    -------
        A. Declare arrow function vs normal function.
        B. Arrow function and "this" keyword. what matters?


    Notes:
    -------
        B. Arrow function and "this" keyword:
        -------------------------------------
            * In arrow function, "this" refers the window / global parent object. 
            * Can't apply -> bind(), call(), apply() in arrow function. 
            * Arrow function a "this" create, assign, change korar capacity nei.
            * We can't set any context outside of the function.  
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

// B. Arrow function and "this" keyword:
const arrowTest = () => {
  console.log(this);
};
// arrowTest();

// "this" keyword's behavior in Object of arrow function
const arrowObj = {
  name: "Jobayer",
  print: () => {
    console.log(this); // "this" refer the window / global object
    console.log(this.name); // undefined
  },
};
// arrowObj.print();

//---------------------------<

// Normal function and "this" keyword.
function normalTest() {
  console.log(this);
}
// normalTest();

// "this" keyword's behavior in Object of normal function
const normalObj = {
  name: "Ahmed",
  print: function () {
    console.log(this); // "this" refer it's parent object
    console.log(this.name); // Ahmed
  },
};
// normalObj.print();
