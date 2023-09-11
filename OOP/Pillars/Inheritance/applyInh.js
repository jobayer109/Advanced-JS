/*
    Topics:
    ----------------------------------------
        A. First Implement of Prototypical Inheritance 
        B. 
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
          
          
        B. 
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

Sqr.prototype = Object.create(Shape.prototype); // Link with grand object.
Sqr.prototype.draw = function () {
  console.log("Draw function executed");
};

// Prototypical Inheritance of Circle
const Circle = function () {
  console.log("I am initial Circle");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
  console.log("Circle function executed");
};

// Output
const sq = new Sqr();
const shape = new Shape();
const circle = new Circle();

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
