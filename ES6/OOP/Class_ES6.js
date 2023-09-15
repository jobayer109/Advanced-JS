/*
    Topics:
    -------
        A. Definition of 'Class'.
        B. 
        C. 


    Notes:
    -------
        A. Definition of 'Class'.
        -------------------------------------
           * Class is just a 'Factory' to create multiple object without code 
             duplication.
*/

//----------------------------------------------------------------------->>

//  Object oriented syntax (ES5)--------------------
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

//  Class function (ES6): Best practice--------------
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
res.calculateArea(12, 10); // 180
res.calculateRange(12, 10); // 54

// ---------------------------------------------------------------------------->>
