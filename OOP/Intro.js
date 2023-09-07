/*
    Topics:
    -------
        A. Procedural syntax
        B. Object oriented syntax


        B. Object oriented syntax:
        -------------------------
            * Think all as like of object.
            * No need to pass arguments

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
