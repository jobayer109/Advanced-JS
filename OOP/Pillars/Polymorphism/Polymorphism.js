/*
    Topics:
    ----------------------------------------
        A. Polymorphism
        B. 
        C. 
        D. 
        E. 
       


    Notes:
    ------
        A. Polymorphism:
        ----------------
          * The term Polymorphism is derived from the word “Polymorph,” where “Poly” 
            means “Many” and “Morph” means “Transforming one form into another“. In 
            Object-Oriented Programming, Polymorphism allows you to perform the same 
            operation in multiple ways. It enables you to invoke the same method 
            with different JavaScript objects by passing selected data members.
          
          
        B. 
        --------------------------------------
          * 

        C.
        ---------------------------------
          * 
         
*/

// ------------------------------------------------------------------------->>
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
// Best practice. call by extend function.
extend(Shape, Sqr);

//  Method override of sqr
Sqr.prototype.common = function () {
  console.log("I am square and I'm overriding function");
};

Sqr.prototype.draw = function () {
  console.log("Draw function executed");
};

// Prototypical Inheritance of Circle
const Circle = function (radius, color) {
  this.radius = radius;
  Shape.call(this, color);
  console.log("I am initial Circle");
};
// Best practice. call by extend function.
extend(Shape, Circle);

// Method Overriding and executing Parent class's function.
Circle.prototype.common = function () {
  console.log("I am circle and I'm overriding function");
};
Circle.prototype.draw = function () {
  console.log("Circle function executed");
};

// Output
const sqr = new Sqr(10, "green");
const circle = new Circle(10, "red");
const shape = new Shape("Indigo");

//------------------------------------<<

//  Array traverse to check Polymorphism

const shapes = [sqr, circle, shape];

// "For-in" loop to get all keys of the array
for (let i in shapes) {
  shapes[i].common();
}

// "For-of" loop to get all keys of the array
for (let i of shapes) {
  i.common();
}
