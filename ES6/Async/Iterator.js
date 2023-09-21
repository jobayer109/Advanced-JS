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
(async function () {
  console.log(await iterable.next()); // {value: 1, done: false}
  console.log(await iterable.next()); // {value: 2, done: false}
  console.log(await iterable.next()); // {value: 3, done: false}
  console.log(await iterable.next()); // {value: 4, done: false}
  console.log(await iterable.next()); // {value: 5, done: false}
  console.log(await iterable.next()); // {done: true}
})();
