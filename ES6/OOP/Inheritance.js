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
         
         
        C. Inheritance in "class" function:
        ------------------------------------------
          * If we want use Parent class's data -> simply write "Child extends 
            Parent".Thats it.
          * To access the data of Parent class in Child class should use 'super()' 
            method in the Child constructor.
          * To access the data inside the constructor of Parent class, should pass 
            that inside 'super()' method's parameter. Ex: super(color). This 'color' 
            is the constructor data of Parent class. 
          
*/

// ------------------------------------------------------------------------->>

// Inheritance in "class" function.

class Parent {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing");
  }
}
/*
        class Parent extends Child {
        constructor(color) {
            super();
            this.color = color;
        }
        draw() {
            console.log("Drawing");
        }
        }
        const result5 = new Parent("Red");
        console.log(result5);

 Notes: If want access data from Child to Parent class,
 ---->  We can't access result5 like this way. 
        Uncaught ReferenceError: Cannot access 'Child' before initialization
*/

class Child extends Parent {
  constructor(color, height, width) {
    super(color);
    this.height = height;
    this.width = width;
  }

  calculate() {
    return this.height * this.width;
  }
}

const result = new Child("Green", 5, 10);

result.calculate(); // 50
result.height; // 5

result.color; // Green

result.draw(); // Drawing.

result; //Child {color: 'Green', height: 5, width: 10}
