/*
    Topics:
    ----------------------------------------
        A. First Implement of Prototypical Inheritance 
        B. Reset Constructor After Inheritance
        C. 
        D. 
        E. 
        F.  


    Notes:
    ------
        A. First Implement of Prototypical Inheritance:
        -------------------------------------------------------
          * Sqr.prototype = Object.create(Shape.prototype); // Link with grand object.
          * Circle.prototype = Object.create(Shape.prototype);
          
          
        B. Reset Constructor After Inheritance:
        --------------------------------------
          * 


        C.
        -----------------------
          * 



*/

// ------------------------------------------------------------------------->>

// A. First Implement of Prototypical Inheritance
const Shape = function () {};

Shape.prototype = {
  common: function () {
    console.log("Common function");
  },
};

// Prototypical Inheritance of Square
const Sqr = function () {
  console.log("Square initial operation");
};

// Best practice
Sqr.prototype = Object.create(Shape.prototype); // Link with grand object.
Sqr.prototype.constructor = Sqr; // নিজের সত্ত্বাকে (constructor) পুনরায় ফিরিয়ে আনা।

Sqr.prototype.draw = function () {
  console.log("Draw function executed");
};

/*
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

      এভাবে কোড লেখা উচিত না। এতে ইনহেটেড প্রোটোটাইপটি রিসেট হয়ে যায়। ৫৩ নাম্বার লাইন ফলো 
      করা উচিত। কারণ এতে করে রিসেট হওয়ার কোনো সুযোগ থাকেনা। 


*/
// Prototypical Inheritance of Circle
const Circle = function () {
  console.log("I am initial Circle");
};

// Best practice
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // নিজের সত্ত্বাকে (constructor) পুনরায় ফিরিয়ে আনা।

Circle.prototype.draw = function () {
  console.log("Circle function executed");
};

// Output
const sq = new Sqr();
const shape = new Shape();
// const circle = new Circle();

/*
    Initially,
        sq -> Sqr -> Object
        shape -> Shape -> Object
        circle -> circle -> Object

    But, we need____
        sq -> Sqr -> Shape -> Object
        circle -> Circle -> Shape -> Object

*/

// -----------------------------------------------------------------------------<<

//

// -----------------------------------------------------------------------------<<
