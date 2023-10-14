/*
    Topics:
    ---------------------------------
        A. Basic Generator (manual)
        B. Basic Generator (looping)
        C. Real-life example of Generator (use case)
            - In redux SAGA.
            - Asynchronous operation
            - ID generator
         

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
function* range(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}
const rangeIT = range();
rangeIT.next(); // { value: 0, done: false }
rangeIT.next(); // { value: 5, done: false }
rangeIT.next(); // { value: 10, done: false }
rangeIT.next(); // { value: 15, done: false }

for (let value of range()) {
  // Using Generator range function became iterable.
  // Should call the range function, otherwise throw not iterable error
  // Finally it will work.
}

// ------------------------------------------------------------------

// C. Real-life example of Generator (ID Generator)
function* generateID() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const userID = generateID();
const productID = generateID();

// Generate user ID
"user:", userID.next().value; // 1
"user:", userID.next().value; // 2
"user:", userID.next().value; // 3

// Generate product ID
"productID:", productID.next().value; // 1
"productID:", productID.next().value; // 2
"productID:", productID.next().value; // 3
"productID:", productID.next().value; // 4
"productID:", productID.next().value; // 5

// ------------------------------------------------------------------
