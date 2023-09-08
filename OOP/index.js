/*
    Topics:
    -------
        A. Object literals
        B. 'this' keyword's use case.
        C. Patterns (class)
            1. Factory pattern 
            2. Constructor pattern


    Notes:
        * This keyword always refers an object.
        * If it can't access any object, it refer window object.

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

// Factory pattern

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

// Constructor pattern

const ConstructorRect = function (width, height) {
  this.width = width;
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

const rect3 = new ConstructorRect(15, 8);
// rect3.draw();
const rect4 = new ConstructorRect(36, 12);
// rect4.draw();

// --------------------------------------------------------------------------->>
