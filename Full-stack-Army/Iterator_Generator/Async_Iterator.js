/*
    Topics:
    ---------------------------------
        A. Async Iterator
    
    Notes:
    ---------------------------------
      Async iterators in JavaScript are a feature introduced in ECMAScript 2018 (ES8) and are a part of asynchronous programming that allows you to iterate over a sequence of asynchronous values or perform asynchronous operations on each iteration. They are particularly useful when dealing with asynchronous data sources such as streams, databases, or asynchronous APIs.

*/

// ------------------------------------------------------------------

// Define an async iterable
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    for (let i = 1; i <= 5; i++) {
      // Simulate an asynchronous operation, e.g., fetching data from an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield i;
    }
  },
};

// Consume the async iterable using an async loop
(async function () {
  for await (const value of asyncIterable) {
    console.log(value);
  }
})();
