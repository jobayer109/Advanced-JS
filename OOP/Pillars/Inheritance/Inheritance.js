/*
    Topics:
    ----------------------------------------
        A. Prototype and Prototypical inheritance. (আদিরূপ)  
        B. Multi level prototypes.
        C. Property descriptor.


    Notes:
    ------
        A. Prototype and Prototypical inheritance:
        ------------------------------------------
          * Prototype means parent class.
          * In JS, every class has a prototype that means parent class.
          * But, prototype (parent class) hasn't any prototype like "object's" prototype 
            is "Object", but "Object" has no prototype.
          * Examples are written below.
          
          
        B. Multi level prototypes:
        ----------------------------------
          1. String prototype.
                string -> String (constructor) -> Object. 

          2. Array prototype.
                array -> Array (constructor) -> Object.  


        C. Property descriptor:
        -----------------------
          * Object.defineProperty("object refer", "property name", {"write the 
            descriptor"})

          Examples are written below.
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

//  C. Property descriptor:
const person = {
  name: "Jobayer",
};

person.name; // Jobayer

//---------------------<

person.__proto__; // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

//---------------------<

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

//---------------------<

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
