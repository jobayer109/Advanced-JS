/*
    Topics:
    -------
        A. Declare arrow function vs normal function.
        B. Arrow function and "this" keyword. what matters?
        C. Normal function and "this" keyword. what matters?


    Notes:
    -------
        B. Arrow function and "this" keyword:
        -------------------------------------
            * In arrow function, "this" refers the window / global parent object. 
            * Can't apply -> bind(), call(), apply() in arrow function. 
            * Arrow function a "this" create, assign, change korar capacity nei.
            * We can't set any context outside of the function.  
           
           
           
        C. Normal function and "this" keyword:
        -------------------------------------
            * In arrow function, "this" refers the current parent object. 
            * Can apply -> bind({this}), call({this}), apply() 
            * Store the "this" in a variable and use it in inner functions.
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

// Another examples are in below: --------------------
// normal function ---------------------
const anotherObj = {
  name: "Jobayer Ahmed",

  method: function () {
    let self = this;
    // This "this" is accessible here. we can use "self" in inner functions. Because, innerly used "self" is different from inner "this". We can apply bind() and call() method to create "this" env.
    console.log(this.name); // Jobayer Ahmed;
    setTimeout(function () {
      console.log(this); // "this" refers the window. there is no "name"
      console.log(`Hello, ${this.name}`); // But there, Hello, undefined
      console.log(`Hello, ${self.name}`); // Hello, Jobayer Ahmed
    }, 2000);
  },
};
// anotherObj.method();

// Arrow function -------------- with normal function.
const anotherObject = {
  name: "Jobayer Ahmed",
  method: function () {
    console.log(this); // Refer it's parent object (anotherObject)
    console.log(this.name); // Jobayer Ahmed;
    setTimeout(() => {
      console.log(this); // Refer it's parent object (anotherObject)
      console.log(`Hello, ${this.name}`); // But there, Hello, undefined
    }, 2000);
  },
};
anotherObject.method();

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
