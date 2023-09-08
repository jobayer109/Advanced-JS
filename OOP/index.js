/*
    Topics:
    -------
        A. Object literals
        B. 'this' keyword's use case.
        C. Patterns (class)
            1. Factory literal pattern 
            2. Constructor / class pattern
               ----> without 'new' keyword the constructor function can't work properly.
        D. "new" keyword
        E. call() method
        F. apply() method
        G. bind() method

    Description:_________________________________________________________________

         B. 'this' keyword:
         -----------------
            1. This keyword always refers an object.
            2. If it can't access any object, it refer window object.


         D. "new" keyword:
         -----------------
           In constructor / class function "new" keyword performs 3  steps works:
            1. Create an empty object.
            2. It bind with "this" keyword of the constructor function.
            3. It can copy constructor func's prototypes and then inherit to the obj.

        
         E. call() method:
         -----------------
            1. If we want write pure function and use "this" keyword, we should call() 
               method and pass a object. Otherwise, it will refer window object and 
               result will be NaN.
            2. If there any function arguments expected, we should pass the args after 
               the object using comma ",".


         F. apply() method:
         -----------------
            1. As same as the point 1 of call() method.
            2. But, If there any function arguments expected, we should pass the args 
               after the object using an array.


         G. bind() method:
         -----------------
            1. 
*/

// Object literal
const rect = {
  width: 50,
  height: 100,
  draw: function () {
    // console.log(`I am a Rectangle`);
    this.properties();
  },
  properties: function () {
    // console.log("Width: " + this.width);
    // console.log("Height: " + this.height);
  },
};
rect.draw();

// If I want to print 'properties' method from another function, then ----->>
const another = {
  width: 45,
  height: 78,
  print: rect.properties, // Properties method print current object's width and height with the help of properties method's 'this' keyword
};
another.print();

// --------------------------------------------------------------------------->>

// Factory literal pattern

function FactoryRect(width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log(`I am a Factory pattern`);
      this.properties();
    },
    properties: function () {
      console.log("Width: " + this.width);
      console.log("Height: " + this.height);
    },
  };
}

const rect1 = FactoryRect(100, 80);
// rect1.draw();
const rect2 = FactoryRect(12, 6);
// rect2.draw();

// --------------------------------------------------------------------------->>

// Constructor/class pattern

const ConstructorRect = function (width, height) {
  this.width = width; // Normally, in a function "this" keyword refers the window obj.
  this.height = height;

  this.draw = function () {
    console.log(`I am a constructor pattern`);
    this.properties();
  };

  this.properties = function () {
    console.log("Width: " + this.width);
    console.log("Height: " + this.height);
  };
};

const rect3 = new ConstructorRect(15, 8); // without new keyword the constructor function can't work properly.
// rect3.draw();
const rect4 = new ConstructorRect(36, 12);
// rect4.draw();

// --------------------------------------------------------------------------->>

// E. call() method:

// If function's args not expected.
function callFunc1() {
  this.a + this.b; // 30
}
callFunc1.call({ a: 10, b: 20 }); // If function's args not expected.

// If function's args expected.
function callFunc2(c, d) {
  this.a + this.b + c + d; // 45
}
callFunc2.call({ a: 10, b: 20 }, 5, 10); // If function's args expected.

// --------------------------------------------------------------------------->>

// F. apply() method:

// If function's args not expected.
function applyFunc1() {
  this.a + this.b; // 30
}
applyFunc1.apply({ a: 10, b: 20 }); // If function's args not expected.

// If function's args expected.
function applyFunc2(c, d) {
  this.a + this.b + c + d; // 45
}
applyFunc2.apply({ a: 10, b: 20 }, [5, 10]); // If function's args expected.

// --------------------------------------------------------------------------->>
