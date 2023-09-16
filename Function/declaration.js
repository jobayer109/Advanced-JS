/*
    Topics:
        A. Normal function declaration (addition, subtraction operation)


    Notes:
    ------
      1. In JavaScript, functions are indeed objects.

      2. This is one of the unique and powerful features of the language.

      3. Functions in JavaScript are first-class objects. It can be -----
          * Assigned to variables, properties, or array elements.
          * Passed as arguments to other functions.
          * Returned from other functions.
          * Created dynamically at runtime.
          
      4. Function expressions (normal expressions / arrow function) and declarations 
         serve the same purpose, but their use-cases differ. While function 
         declarations are hoisted, making them callable before their declaration, 
         function expressions aren’t. Knowing when to use which is crucial for clean 
         code.

      5. Functions are always hoisted first. In whatever order the declarations of a 
         function and a variable with the same name occur in your code, the function 
         takes precedence, because it rises higher.
          
          Example is written below ----|>


*/
// --------------------------------------------------------------------------->>

// addition numbers
function add(a, b) {
  const result = a + b;
  //   console.log(result);
}
add(5, 9); // 14
add(12, 20); // 32

// -------------------------->>

// subtraction number:
function sub(a, b) {
  const result = a - b;
  return result;
}
const res1 = sub(12, 8); // 4
const res2 = sub(58, 8); // 50

// --------------------------------------------------------------------------->>
