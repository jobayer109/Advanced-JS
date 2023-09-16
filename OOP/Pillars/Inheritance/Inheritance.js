/*
    Topics:
    ----------------------------------------
        A. Inheritance Definition
        B. Prototype and Prototypical inheritance. (আদিরূপ)  
        C. Multi level prototypes.
        D. Property descriptor.
        E. Constructor prototype (Ex: Array.prototype).
        F. Instance vs Prototype Members 
        G. Using Instance and Prototype Members 


    Notes:
    ------
        A. Inheritance Definition:
        ------------------------------------------
          * Inheritance in JavaScript allows you to create reusable and structured 
            code by defining shared behaviors in a prototype or class and then 
            creating objects that inherit those behaviors. It's a key concept in 
            building object-oriented JavaScript programs.

          * Here's how inheritance works in JavaScript:
              1. Prototype Chain: Every object in JavaScript has an associated 
                 prototype object. When you access a property or method on an 
                 object, JavaScript looks for that property or method on the object 
                 itself. If it doesn't find it, it looks in the object's prototype, 
                 and this process continues up the prototype chain until the 
                 property or method is found or the chain ends with null.
              2. Constructor Functions: Constructor functions are used to create 
                 objects that share the same prototype. When you create an object 
                 using a constructor function with the new keyword, the object 
                 inherits properties and methods from the constructor function's 
                 prototype.
              3. Object.create(): Another way to set up inheritance in JavaScript is 
                 to use the Object.create() method. It allows you to create a new 
                 object with a specified prototype.
              4. Class Syntax (ES6): With the introduction of ES6 (ECMAScript 2015), 
                 JavaScript introduced a class syntax that makes it easier to work 
                 with inheritance. Classes provide a more familiar and structured 
                 way to define constructor functions and their prototypes.
                
        
        B. Prototype and Prototypical inheritance:
        ------------------------------------------
          * Prototype means parent class.
          * In JS, every class has a prototype that means parent class.
          * But, prototype (parent class) hasn't any prototype like "object's" 
            prototype is "Object", but "Object" has no prototype.
          * Examples are written below.
          
          
        C. Multi level prototypes:
        ----------------------------------
          1. String prototype.
                string -> String (constructor) -> Object. 

          2. Array prototype.
                array -> Array (constructor) -> Object.  


        D. Property descriptor:
        -----------------------
          * Object.defineProperty("object name", "property name", 
                {
                    writable: true,    // we can set 'false'
                    enumerable: true,  // we can set 'false'
                    configurable: true // we can set 'false'
                    value: 'Jobayer',  // This is default value that we can set.
                })

          Examples are written below.


        E. Constructor prototype (Ex: Array.prototype):
        -----------------------------------------------
          * Every string, array, object are belong under a paren class (prototype).
          * If we expand the console.log of an array, we can see the created method 
            or object.
          * We can do this using -> "Array.prototype.myFunc = function method(){}"
          * When you call a constructor function with the new keyword, it creates a 
            new object and sets the this keyword to refer to that new object within 
            the constructor function.

          Examples are written below.


        F. Instance vs Prototype Members:
        --------------------------------
          * Instance means own the body part of a function or object. It's called 
            instance members.
          * On execution process, JS engine firstly search the method in it's own 
            instance, Otherwise it moves to it's parent class; that means to it's 
            prototype. 


        G. Using Instance and Prototype Members:
        ---------------------------------------
          * We can call prototype functions from instance function. Similarly, 
            instance function from prototype function scope.

*/

// ------------------------------------------------------------------------->>

// Prototype and Prototypical inheritance explanation.
/*

let obj = {}
obj
{}
[[Prototype]]: Object
---------------------------------------------------------<<

let obj2 = new Object()
obj2
{}
[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

----------------------------------------------------------<<

obj.__proto__ === obj2.__proto__
true

----------------------------------------------------------<<

Object.getPrototypeOf(obj)

{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

----------------------------------------------------------<<

Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)
true

----------------------------------------------------------<<
*/
//
//
//

//  D. Property descriptor:
const person = {
  name: "Jobayer",
};

person.name; // Jobayer

//--------------------------------<

person.__proto__; // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

//--------------------------------<

// Get property descriptor for a property of an object
Object.getOwnPropertyDescriptor(person, "name"); // Output below
/*
        {
            value: 'Jobayer', 
            writable: true, 
            enumerable: true, 
            configurable: true
        }
        [[Prototype]]: Object
*/

//---------------------------------<

// Modify the property descriptor of a property.
const modified = Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
  //   value: "Mr. Ahmed" // we can set a default value also.
});

modified; // {name: 'Jobayer'}

person.name = "Taima"; // Can't change the previous value "Jobayer"

person.name; // output: "Jobayer" instead of "Taima"

Object.keys(person); // []; we can't access the keys of the object.

// -----------------------------------------------------------------------------<<

// Constructor prototype (Ex: Array.prototype)
const arr = [];
arr; // []

Array.prototype.myMethod = function method() {
  return "My constructor method";
};

/*
        arr
        []

        length: 0
        [[Prototype]]: Array(0)
        myMethod: ƒ method()     // This is the function that we created
        [[Prototype]]: Object


*/

// -----------------------------------------------------------------------------<<

//  F. Instance vs Prototype Members in JS.

const Square = function (width) {
  // Instance members cell
  this.width = width;
};

Square.prototype = {
  // Prototype members cell
  draw: function (width) {
    console.log(this.width);
  },
  toString: function () {
    // function overwrite process
    console.log("The width is = " + this.width);
  },
};

const sqr1 = new Square(10);
const sqr2 = new Square(20);

// -----------------------------------------------------------------------------<<

// Using Instance and Prototype Members
const Squares = function (width) {
  // Instance members cell
  this.width = width;

  this.getWidth = function () {
    console.log("The width is = " + this.width);
    // this.draws();
  };
};

Squares.prototype = {
  // Prototype members cell
  draws: function () {
    console.log("Draw function has called");
    this.getWidth();
  },
  toString: function () {
    // function overwrite process
    console.log("The width is = " + this.width);
  },
};

const sqr3 = new Squares(30);
const sqr4 = new Squares(90);
// -----------------------------------------------------------------------------<<
