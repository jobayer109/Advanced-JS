/*
    Topics:
    -------
        A. Definition of 'Object' and 'OOP'
        B. Procedural syntax
        C. Object oriented syntax
        D. Think everything as an object.


        A. Definition of 'Object' and 'OOP':
        ------------------------------------
            Object: Everything which takes multiple properties to describe is an 
                    object.
            
            Object Oriented Programming: Object Oriented Programming is a 
                    programming paradigm based on the concept of "Object", which can 
                    contain data, in the form of field (known as attribute), And 
                    code, in the form of procedure (known as method).


        C. Object oriented notes:
        -------------------------
            * Think all as like of object.
            * No need to pass arguments
            
            
        D. Think everything as an object.
        --------------------------------
            * 


*/

// ---------------------------------------------------------------------------->>

// A. Procedural syntax
var width = 10;
var height = 25;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width + height);
}

const res1 = calculateArea(width, height); // 250
const res2 = calculateRange(width, height); // 70

// ---------------------------------------------------------------------------->>

// B. Object oriented syntax
const rect = {
  width: 15,
  height: 12,
  calculateArea: function () {
    return this.width * this.height;
  },
  calculateRange: function () {
    return 2 * (this.width + this.height);
  },
};

const result1 = rect.calculateArea(); // 180
const result2 = rect.calculateRange(); // 54

// ---------------------------------------------------------------------------->>
