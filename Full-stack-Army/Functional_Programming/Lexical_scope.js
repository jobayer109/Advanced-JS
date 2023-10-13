/*
    Topic: Lexical scope
    ----------------------------------
        - That means, which variable or which function or anything     
          where to access from.

    Steps of lexical scope:
    -----------------------------------
        lexing / parsing / Tokenize ----> compile -> run


*/

// ---------------------------------------------------------------

function power(p) {
  return function (n) {
    let res = 1;
    for (let i = 1; i <= p; i++) {
      res *= n;
    }
    return res;
  };
}

const sqr = power(2); // Here, returned a func named "sqr"
const cube = power(3); // Here, returned a func named "cube"
const power8 = power(8); // Here, returned a func named "power8"

// Now we can calculate
sqr(2); // 4
cube(3); // 27
power8(2); // 256

// Different way to get output:
console.log(power(5)(2));
