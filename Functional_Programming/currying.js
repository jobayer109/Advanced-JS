/*
   Topics:
        A. Currying function 

    Notes:
        * Using it we can control arguments passing throw a function.
        * It use in production level to deal multiple arguments.
        * No built in tool and software on it.
*/

// ----------------------------------------------------------------------------------->>

// Traditional addition of numbers.

function add(a, b, c) {
  return a + b + b;
}
add(5, 5, 5); // 15

// ----------------------------------------------------------------------------------->>

// Currying function implement of code above.
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = currying(5)(5)(10); // currying function cal.
result; // 20
