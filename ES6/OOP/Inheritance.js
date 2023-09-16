/*
    Topics:
    ----------------------------------------
        A. Inheritance Definition
        B. Prototype and Prototypical inheritance. (আদিরূপ).
        C. Inheritance in "class" function.
       


    Notes:
    ------
        A. Inheritance Definition: (Inheritance = উত্তরাধিকার):
        ----------------------------------------------------
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
          
*/

// ------------------------------------------------------------------------->>
