/*
   Topics:
      1. Pure function definition and characteristics.
      2. Some not a pur function example
      

        1. Pure function.
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

// Pure function definition and characteristics.

// Example: 1
function sqr(n) {
  return n * n;
}
sqr(2); // 4; It alway return same result without side effect.
sqr(3); // 9; It alway return same result without side effect.

// ----------------------------------------------------------------------------------->>
