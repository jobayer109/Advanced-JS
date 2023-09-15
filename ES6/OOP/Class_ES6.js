/*
    Topics:
    -------
        A. Definition of 'Class'.
        B. Object oriented syntax (ES5)
        C. Object oriented syntax (ES6)


    Notes:
    -------
        A. Definition of 'Class'.
        -------------------------------------
           * Class is just a 'Factory' to create multiple object without code 
             duplication.
           * class name is a --> "function". 
           * when that class declares with "new" keyword then --> "object".
           * when that class declares with "new" keyword then --> "object".
*/

//----------------------------------------------------------------------->>

// B. Object oriented syntax (ES5)--------------------
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

// C. Class function (ES6): Best practice_______________
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

const res = new Rect();
res.calculateArea(12, 10); // 180
res.calculateRange(12, 10); // 54

typeof Rect; // function
typeof res; // object

// ---------------------------------------------------------------------------->>
