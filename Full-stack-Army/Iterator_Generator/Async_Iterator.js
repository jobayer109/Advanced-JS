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

// ------------------------------------------------------------------

// Define an async iterable for fetching data from a remote API
const asyncIterable1 = {
  [Symbol.asyncIterator]: async function* () {
    let pageNumber = 1;
    while (true) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`
      );
      const data = await response.json();

      if (data.length === 0) {
        // If no more data is returned, end the iteration
        return;
      }

      yield data;
      pageNumber++;
    }
  },
};

// Consume the async iterable using an async loop
(async function () {
  let totalPosts = 0;

  for await (const page of asyncIterable1) {
    console.log(`Fetched ${page.length} posts`);
    totalPosts += page.length;
  }

  console.log(`Total posts fetched: ${totalPosts}`);
})();
