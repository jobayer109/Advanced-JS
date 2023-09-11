/*
    Topics:
    ----------------------------------------
        A. Iterate / Traverse Object and HasOwnProperty method. 
        B. 
        C. 
        D. 
        E. 
        F.  


    Notes:
    ------
        A. Iterate / Traverse Object and HasOwnProperty method:
        -------------------------------------------------------
          1. To get only "keys" of the object, it returns only properties name of 
             Instance cell, not prototype cell property.
             Ex: Object.keys(sqr1) 

          2. To get all properties name of an object we should apply "for-in" loop. It 
             returns all properties of Instance and Prototype member cell.

          3. By using "hasOwnProperty" method, we can confirm that the property is existed 
             or not existed. It returns true / false.
             Ex: sqr5.hasOwnProperty("width"); // false
          
        B. 
        ----------------------------------
          *  


        C.
        -----------------------
          * 



*/

// ------------------------------------------------------------------------->>

// Iterate / Traverse Object and HasOwnProperty method.
const Rectangle = function (height) {
  // Instance members cell
  this.height = height;

  this.getHeight = function () {
    console.log("The height is = " + this.height);
    // this.draw(); // we can call / get access of prototype members.
  };
};

Rectangle.prototype = {
  // Prototype members cell
  draw: function () {
    console.log("Draw function has called");
    this.getHeight(); // we can call / get access of instance members.
  },
  toString: function () {
    // function overwrite process
    console.log("The height is = " + this.height);
  },
};

const sqr5 = new Rectangle(30);
const sqr6 = new Rectangle(90);

// Get keys (properties) using Object constructor:
Object.keys(sqr5); //  ['height', 'getWidth']; They are part of Instance members.

// Get all keys (properties) of the object using "for-in" loop.
for (let keys in sqr5) {
  keys; // height, getWidth, draw, toString
}

// Check properties using "hasOwnProperty" method: It returns true/ false.
sqr5.hasOwnProperty("width"); // false
sqr5.hasOwnProperty("height"); // true
sqr5.hasOwnProperty("toString"); // false; Bcz, it's a part of prototype.
sqr5.hasOwnProperty("getHeight"); // true

// -----------------------------------------------------------------------------<<
