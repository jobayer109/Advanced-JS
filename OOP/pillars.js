/*
    Topics:
    ----------------------------------------
        A. Abstract 
        B. Private property of a constructor function.


    Notes:
    ----------------------------------------
        A. Abstract:
        ------------
          * An abstraction is a way of hiding the implementation details and 
            showing only the functionality to the users.
          * May be constructor function name should be unique. Bcz, whenever I use same 
            name id different file it says, "Uncaught SyntaxError: Identifier 'Rectangle' 
            has already been declared (at pillars.js:1:1)"
          
          
        B. Private property of a function:
        ----------------------------------
          * If we want to any property of a constructor function, we should declare that 
            property with a variable except "this" property.  


*/

// ------------------------------------------------------------------------->>

// Abstract
const Rectangle = function (width, height) {
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

const result = new Rectangle(10, 8);
// result.draw();

// ------------------------------------------------------------------------->>

// Private property of a constructor function
const Private = function (width, height) {
  this.width = width; // Normally, in a function "this" keyword refers the window obj.
  this.height = height;

  let position = {
    x: 10,
    y: -50,
  };

  /*
        let properties = function () {
          console.log("Width: " + this.width);
          console.log("Height: " + this.height);
        };

       This "this" will print undefined. bcz, it refers the window object. There are no values 
       named "width" and "height". To access the width and height, should remove "this" 
       keyword. Alternatively, we can use bind() method here. 
*/

  let properties = function () {
    console.log("Width: " + width); // without "this" keyword.
    console.log("Height: " + height); // without "this" keyword.
  };

  this.draw = function () {
    console.log(`I am a private property`);
    properties();
    console.log("x: " + position.x, "y: " + position.y);
  };
};

const result1 = new Private(10, 8);
result1.draw();
