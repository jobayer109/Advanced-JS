/*
    Topics:
    -------
        A. What is Iterator ? 
        B. 

    Notes:
    ------
        * To iterate a collection of something, use Iterator.
        * It's a sync process.
        * Can iterate collection of Promises.
        * Using [Symbol.asyncIterator]() method, we can create a async iterator.  
*/

// -------------------------------------------------------------------->>

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 5) {
          return Promise.resolve({
            value: i++,
            done: false,
          });
        } else {
          return Promise.resolve({ done: true });
        }
      },
    };
  },
};

const iterable = asyncIterable[Symbol.asyncIterator]();

// Create Async iterator using IIFEs
// But it's not production standard. We can use "for await of" loop in the async function
(async function () {
  // To see output use console.log()
  await iterable.next(); // {value: 1, done: false}
  await iterable.next(); // {value: 2, done: false}
  await iterable.next(); // {value: 3, done: false}
  await iterable.next(); // {value: 4, done: false}
  await iterable.next(); // {value: 5, done: false}
  await iterable.next(); // {done: true}
})();

//..................................

// For of loop in async Iterator using IIFEs

(async function () {
  for await (let value of asyncIterable) {
    value; // Succeed
  }
})();

// -------------------------------------------------------------------->>
