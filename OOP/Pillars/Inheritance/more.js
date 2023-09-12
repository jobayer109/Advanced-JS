/*
    Topics:
    ----------------------------------------
        A. Iterate / Traverse Object and HasOwnProperty method. 
        B. Don't Overwrite Built in Prototypes
        C. When to use Inheritance ?
        D. Composition vs Inheritance.
       

    Notes:
    ------
        A. Iterate / Traverse Object and HasOwnProperty method:
        -------------------------------------------------------
          * To get only "keys" of the object, it returns only properties name of 
             Instance cell, not prototype cell property.
             Ex: Object.keys(sqr1) 

          * To get all properties name of an object we should apply "for-in" loop. 
             It returns all properties of Instance and Prototype member cell.

          * By using "hasOwnProperty" method, we can confirm that the property is 
             existed or not existed. It returns true / false.
             Ex: sqr5.hasOwnProperty("width"); // false
          
          
        B. Don't Overwrite Built in Prototypes:
        --------------------------------------
          *  We should not overwrite or change the Built in prototype. Like: Array.
             prototype.hudai = function () { }. It works. But it's harmful for the 
             project. We should change our own Prototypes, not Built in Prototypes.


        C. When to use Inheritance ?
        ----------------------------
          * To avoid code duplication.
          * When prototype layer less than 3. But 2 layer is best.
          * More than 3 layers code is difficult to maintain and update.
         
         
        D. Composition vs Inheritance.
        ------------------------------
          * The main difference is in there use case. 
          * If the layers more than 2, should use Composition.
          * In Composition, methods are converted to object.
       **** we can use both Composition and inheritance at the same time. Amazing!!



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

// Don't Overwrite Built in Prototypes
Array.prototype.hudai = function () {}; // Don't do this

Array.prototype.ownPrototype = function () {}; // Do this

// -----------------------------------------------------------------------------<<

// D. Composition and Inheritance:

// The mixin function will control the code repetition:

function mixin(target, ...sources) {
  target.prototype = Object.assign(target, ...sources);
}

// converted method to objects for easy access for Composition.
const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canSwim = {
  swim: function () {
    console.log("Swimming...");
  },
};

// Composition applying process.
const persons = Object.assign({}, canWalk, canEat);
console.log(persons);

// Inheritance applying process of Persons:
function Persons(name) {
  this.name = name;
}

// Bad code
// Persons.prototype = Object.assign(Persons.prototype, canWalk, canEat);

// Best practice
mixin(Persons.prototype, canEat, canWalk);
const per = new Persons("Jobayer");

// Inheritance applying process of GoldFish:

function GoldFish(color) {
  this.color = color;
}

// Bad code
// GoldFish.prototype = Object.assign(GoldFish.prototype, canEat, canSwim);

// Best practice
mixin(GoldFish.prototype, canEat, canSwim);
const gold = new GoldFish("golden");
