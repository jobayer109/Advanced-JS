/*
    Topics:
    ----------------------------------------
        A. Abstract 


    Notes:
    ----------------------------------------
        A. Abstract:
        ------------
          * An abstraction is a way of hiding the implementation details and 
            showing only the functionality to the users.


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
