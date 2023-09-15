/*
    Topics:
    -------------------
        A. Definition of 'Class'.
        B. Class VS code repetition.
        


        A. Definition of 'Class':
        ------------------------------------
        Class is just a 'Factory' to create multiple object without code duplication.
            


    Notes:
    -------------------
        * Ignore code repetition.
        * It's template of objects.

*/

// ---------------------------------------------------------------------------->>

//  B. Class VS code repetition.

//  Object oriented syntax
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

//
//  Class constructor: Best practice.
class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }

  calculateRange() {
    return 2 * (this.width + this.height);
  }
}

const res = new Rect(12, 15);
const res1 = new Rect(4, 5);
const res2 = new Rect(12, 8);
// console.log(res, res1, res2);

// ---------------------------------------------------------------------------->>
