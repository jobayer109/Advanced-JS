/*
    Topics:
    ----------------------------------------
        A. Prototype and Prototypical inheritance. (আদিরূপ)  
        B. 
        C. 


    Notes:
    ----------------------------------------
        A. Prototype and Prototypical inheritance:
        ------------------------------------------
          * Prototype means parent class.
          * In JS, every class has a prototype that means parent class.
          * But, prototype hasn't any prototype like "object's" prototype is "Object", but 
            "Object" has no prototype. 
          
          
        B. 
        ----------------------------------
          *  


        C. 
        ------------------------------
          * 
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
