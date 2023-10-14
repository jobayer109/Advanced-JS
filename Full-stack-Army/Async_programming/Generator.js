/*
    Topics:
    ---------------------------------
        A. Basic Generator (manual)
        B. Basic Generator (looping)
        C. Real-life example of Generator
         

    Notes:
    ---------------------------------
      * Generator always returns a iterator
      * Use a star(*) before function name to make Generator func.
      * To get the value use keyword "yield".
      * Must store the generator function in a variable, otherwise 
        results are always same. And using the variable call the next()
      *

*/
// ------------------------------------------------------------------

// A. Basic Generator (manual)
function* basicGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const basicGen = basicGenerator();
basicGen.next(); // { value: 1, done: false }
basicGen.next(); // { value: 2, done: false }
basicGen.next(); // { value: 3, done: false }
basicGen.next(); // { value: undefined, done: true }

// ------------------------------------------------------------------

// B. Basic Generator (looping)

// ------------------------------------------------------------------

// C. Real-life example of Generator
