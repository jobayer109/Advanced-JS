/*
    Topics:
    ----------------------------------------
        A. First Implement of Prototypical Inheritance 
        B. Reset Constructor After Inheritance
        C. Calling Super With Call Method
        D. Creating Extends Function to avoid code duplication.
        E. Method Overriding
       


    Notes:
    ------
        A. First Implement of Prototypical Inheritance:
        -------------------------------------------------------
          * Sqr.prototype = Object.create(Shape.prototype); // Link with grand object.
          * Circle.prototype = Object.create(Shape.prototype);
          
          
        B. Reset Constructor After Inheritance:
        --------------------------------------
          * 

        C. Calling Super With Call Method:
        ---------------------------------
          * If we want use anything from Parent class to child class. We should use 
           call() / bind() method to access it. like Shape.call(this (refer the obj), 
           color (parameter)).
         
         
        D. Creating Extends Function to avoid code duplication:
        -------------------------------------------------------
          * Follow the code in the below.
         
         
        E. Method Overriding:
        -------------------------------------------------------
          * If we want to change / override the Parent class's method, we should the 
            Reset code after the extend function.  
          * But, I have another way to access the Parent method in Reset function 
            that apply after the extend function 
          * We can handle both type of operations in the Reset function.
          * Code example below.



*/

// ------------------------------------------------------------------------->>

/*
    A. First Implement of Prototypical Inheritance
    B. Reset Constructor After Inheritance.
    C. Calling Super With Call Method.
    D. Creating Extends Function to avoid code duplication.
    E. Method Overriding

    All points are applied in the code below...
*/
// Common function to avoid code duplication to make a obj inherited.
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Parent function
const Shape = function (color) {
  this.color = color;
};

Shape.prototype = {
  common: function () {
    console.log("This common method");
  },
};

// Prototypical Inheritance of Square: Child function.
const Sqr = function (width, color) {
  Shape.call(this, color); // Super calling
  this.width = width;
  console.log("I am initial Draw");
};
// Best practice:
// Sqr.prototype = Object.create(Shape.prototype); // Link with grand object.
// Sqr.prototype.constructor = Sqr; // নিজের সত্ত্বাকে (constructor) পুনরায় ফিরিয়ে আনা।

extend(Shape, Sqr); // Best practice. call by extend function.

Sqr.prototype.draw = function () {
  console.log("Draw function executed");
};

/*
----> Reset Constructor After Inheritance
        Sqr.prototype = {
          draw: function () {
          console.log("Draw function executed");
          },
        };

        Sqr.prototype = {
          test: function () {
          console.log("Another Draw function executed");
          },
        };

      এভাবে কোড লেখা উচিত না। এতে ইনহেটেড প্রোটোটাইপটি রিসেট হয়ে যায়। ৫৩ নাম্বার লাইন 
      ফলো করা উচিত। কারণ এতে করে রিসেট হওয়ার কোনো সুযোগ থাকেনা। 
*/

// Prototypical Inheritance of Circle
const Circle = function (radius, color) {
  this.radius = radius;
  Shape.call(this, color);
  console.log("I am initial Circle");
};
// Best practice
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle; // নিজের সত্ত্বাকে (constructor) পুনরায় ফিরিয়ে আনা।
extend(Shape, Circle);

// Method Overriding and executing Parent class's function.
Circle.prototype.common = function () {
  Shape.prototype.common.call(this); // Accessing Parent class's method.
  console.log("I am circle and I'm overriding function");
};

Circle.prototype.draw = function () {
  console.log("Circle function executed");
};

// Output
const sq = new Sqr(10, "green");
// const shape = new Shape();
const circle = new Circle(10, "red");

/*
    Initially,
        // sq -> Sqr -> Object
        shape -> Shape -> Object
        circle -> circle -> Object

    But, we need____
        sq -> Sqr -> Shape -> Object
        circle -> Circle -> Shape -> Object

*/

// -----------------------------------------------------------------------------<<

//

// -----------------------------------------------------------------------------<<
