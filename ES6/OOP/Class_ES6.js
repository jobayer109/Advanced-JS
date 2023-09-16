/*
    Topics:
    -------
        A. Definition of 'Class'.
        B. Object oriented syntax (ES5)
        C. Object oriented syntax (ES6)
        D. Static method.
        E. "this" keyword's role in "class" function


    Notes:
    -------
        A. Definition of 'Class'.
        -------------------------------------
           * Class is just a 'Factory' to create multiple object without code 
             duplication.
           * class is a --> "function". 
           * when that class declares with "new" keyword then --> "object".
           * If we need to pass arguments should use "constructor" method. And   
             define the parameter in that "constructor" method.
           * When created methods inside the "class" not in the "constructor" 
             method, they will set under the proto.
           * If we don't want to set any 'methods / variables' under the "proto", 
             that method should be write in the "constructor" method.
           * Another way to not set any 'method / any primitive data' under the 
             proto, normally we write the 'function expression / variables' in the 
             "class" body. But the problem is, we should install the "Babel class 
             plugin" in the project. Otherwise it won't work. But in the React.js 
             project,we'll get this feature in built in way.
           * 
        
        
        D. Static method:
        -------------------------------------
           * Have to explore. 
        
        
        E. "this" keyword:
        -------------------------------------
           * The "class" function use "strict" mode as native implementation.
           * "class" prevents to access the window / global object automatically.
           * If "this" can't access anything that it want, because of "class", it 
             will return "undefined".
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

// E. "this" keyword in "class" function_____________________

// In normal constructor:
function FullName() {
  this.draw = function () {
    console.log(this);
  };
}

const name1 = new FullName();
// console.log(name1.draw());
