/*

    IIFE stands for "Immediately Invoked Function Expression" in JavaScript. It is a design pattern used to create and execute a function immediately after its declaration.

    Why IIFE:
    -------------------
    IIFE is commonly used **to create a private scope for variables, preventing them from polluting the global scope**. It is also used for tasks like **initializing variables, setting up configurations, or encapsulating code to avoid naming conflicts in complex applications.** It's a useful tool for maintaining clean and organized JavaScript code.

*/

// Arrow function
(() => {
  console.log("Hello world");
})();

// Normal function
(function myFn() {
  console.log("Hello from IIFE");
})();
