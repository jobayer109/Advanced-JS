/*
    Topics:
    -------
        A. Object literals
        B. 'this' keyword's use case.
        C. Patterns 
            1. Factory pattern 
            2. Constructor pattern (Class)


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

function factoryRect(width, height) {
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

const res1 = factoryRect(100, 80);
res1.draw();
