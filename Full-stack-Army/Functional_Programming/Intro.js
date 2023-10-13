/*
    Topics of Functional Programming
        1. Pure function + Side effect
        2. Higher order function
        3. Function scope
        4. Closure
        5. Hoisting
        6. Callback function
        7. Instant Invoked Functional Expression (IIFE)
        8. What is functional programming?
 */

// ---------------------------------------------------------------

//   1. Pure function
function sum(a, b) {
  return a + b;
}
sum(20, 10); // 30

//  Impure function
// Here console.log is a side effect.
function greet(msg) {
  console.log(msg);
}

// 1.1: Side effect
let limit = 100;
function changeLimit(limit) {
  limit = 500;
  return limit;
}
changeLimit(limit); // nothing
console.log(changeLimit(limit)); // 500

// Pure function related with array
// This is a pure function bcz, this function took the array as an argument as the function's normal behavior.
const arr = [1, 2, 3];
function change(arr, data) {
  arr.push(data);
}
// Impure and side effected function related with array
// This is a impure function bcz, this function change the array element outside of the function.
const array = [1, 2, 3];
function change(data) {
  array.push(data);
}

// ------------------------------------------------------

// 8. What is functional programming?

/*
      Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It is based on the concept of using functions to transform data, and it emphasizes immutability, pure functions, and the avoidance of side effects. Here are some key concepts and principles of functional programming:

    1. **Pure Functions**: A pure function is a function where the output is solely determined by its input parameters, and it has no side effects. This means it doesn't modify any external state or data. Given the same input, a pure function will always produce the same output, which makes it predictable and easy to reason about.
    2. **Immutability**: In functional programming, data is typically treated as immutable. Once a data structure is created, it cannot be changed. Instead, new data structures are created as a result of applying functions to existing data.
    3. **First-Class and Higher-Order Functions**: Functional programming languages treat functions as first-class citizens. This means functions can be assigned to variables, passed as arguments to other functions, and returned from other functions. Higher-order functions are functions that operate on other functions, either by taking them as arguments or returning them.
    4. **Referential Transparency**: This refers to the idea that you can replace a function call with its return value without changing the program's behavior. In other words, the result of a function is solely determined by its input, and it doesn't rely on an external state.
    5. **Recursion**: Functional programming often relies on recursion to solve problems. Loops and mutable variables are minimized in favor of recursive functions that work on immutable data.
    6. **Function Composition**: In functional programming, you can compose functions to create more complex functions by chaining them together. This allows for the construction of complex operations from simpler ones.
    7. **Declarative Style**: Functional programming encourages a declarative style of programming, where you describe what you want to do rather than specifying how to do it. This makes code more self-explanatory and less focused on low-level details.
    8. **Lazy Evaluation**: Some functional programming languages support lazy evaluation, which means that expressions are not evaluated until their results are needed. This can improve performance and allow for more efficient use of resources.

    Functional programming is not limited to a specific programming language but rather a set of principles that can be applied in various languages. However, some languages are designed with functional programming in mind and make it easier to follow these principles, such as Haskell, Lisp, and Erlang. Additionally, many mainstream languages, like JavaScript, Python, and Java, also support functional programming to varying degrees, allowing developers to incorporate functional techniques into their code.
*/
