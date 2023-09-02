/*
   Topics:
      A. Pure function definition and characteristics.
      B. Some not a pur function example
      

        A. Pure function.
        ----------------->
            * Pure function always produce the same output for same arguments 
              irrespective of anything else.  

            * It's easy to debug because pure functions have no side effects 
              or hidden I/O.

            * Without arguments a function can be pure function.

            * Pure functions also make it easier to write parallel/concurrent 
              applications.When the code is written in this style, a smart compiler can 
              do many things – it can parallelize the instructions, wait to evaluate 
              results when needing them, and memorize the results since the results 
              never change as long as the input doesn’t change.
*/

// ----------------------------------------------------------------------------------->>

// A ----> Pure function definition and characteristics.

// Example: 1
function sqr(n) {
  return n * n;
}
sqr(2); // 4; It alway return same result without side effect.
sqr(3); // 9; It alway return same result without side effect.

// ----------------------------------------------------------------------------------->>

// B ----> Some 'not' a pur function examples.

// Example: 1
var n = 10;
function change() {
  n = 20;
  // console.log(n);
}
n; // 10; There is no side effect.
change(); // 20; Side effect.
n; // 20;

// ---------------------<< Not a pure function.

// Example: 2
var point = {
  x: 10,
  y: 11,
};

function pointChange(point) {
  point.x = 1010;
  point.y = 1111;
  console.log(point);
}
point; // { x: 10, y: 11 }
pointChange(point); // { x: 1010, y: 1111 }
point; // { x: 1010, y: 1111 }
