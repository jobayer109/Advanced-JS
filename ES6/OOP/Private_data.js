/*
    Topics:
    -------
        A. Private data in "class" function.
        B. Ways to hide data.
        C. use Getter Setter to access private data.


    Notes:
    -------
        A.  Private data in "class" function:
        -------------------------------------
           * This is a data hiding and preventing to access from outside of the 
             "class" function. 


        B.  Ways to hide data:
        -------------------------------------
           There some ways to hide data from "class" function__________ 
           
            1. Symbol. (Ex: const _draw = Symbol() and wrap the data with []) 
            2. WeakMap. (Ex: const _draw = new WeakMap() and to set the data write 
               in constructor like: _draw.set(this, draw) 
       
       
        C. use 'Getter' 'Setter' to access private data:
        ------------------------------------------------
           * To 'get' private data by a method call -> simply write "get" keyword 
             before the method in "class" function. (Ex: _height.get(this)) 
           * To 'set' / update private data by a method call -> simply write "set" 
             keyword before the method in "class" function. (Ex: _height.set(this, 
             height)) 
*/

//----------------------------------------------------------------------->>

// B.1  Way to hide data from "class" function______(using Symbol)

const _radius = Symbol();
const _name = Symbol();

class Circle {
  constructor(radius, name) {
    this[_radius] = radius;
    this[_name] = name;
  }
  // using Symbol(), we can hide our draw method also
  draw() {
    console.log("Drawing...");
    console.log(this);
  }
}

const c1 = new Circle(2, "CRED");
// c1.draw();
// console.log(Object.getOwnPropertySymbols(c1)); // We can see Symbols by this.

//----------------------------------------------------------------------->>

// B.2  Way to hide data from "class" function______(using new WeakMap())

const _height = new WeakMap();
const _width = new WeakMap();

class Shape {
  constructor(height, width) {
    _height.set(this, height);
    _width.set(this, width);
  }

  print() {
    console.log("Shape drawing...");
    console.log(_height.get(this), _width.get(this));
  }
}

const s1 = new Shape(10, 20);
// s1.print();

//----------------------------------------------------------------------->>

// C. use Getter Setter to access private data by method call.

const _height1 = new WeakMap();
const _width1 = new WeakMap();

class Rectangle {
  constructor(height1, width1) {
    _height1.set(this, height1);
    _width1.set(this, width1);
  }

  print() {
    console.log("Rectangle drawing...");
    console.log(_height1.get(this), _width1.get(this));
  }
  get height1() {
    console.log(_height1.get(this));
  }

  /**
   * @param {number} value
   */
  set width1(value) {
    console.log(_width1.get(this)); // 10
    console.log(_width1.set(this, value)); // WeakMap {Rectangle => 100}
  }
}

const r1 = new Rectangle(5, 10);
// r1.print();
// r1.height1;
// r1.width1 = 100;
// r1.width1;

//----------------------------------------------------------------------->>
