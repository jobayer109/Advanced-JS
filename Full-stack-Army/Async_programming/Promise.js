/*
    1. Simple Promise
    2. Make a timer using Promise (Interview Question)
    3.

*/
// -------------------------------------------------------------

// 1. Simple Promise
const isValid = false;
const promise = new Promise((resolve, reject) => {
  if (isValid) {
    resolve("Resolved");
  } else {
    reject(new Error("Something went wrong"));
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  });

// -------------------------------------------------------------

// 2. Make a timer using Promise (Interview Question)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000).then(() => {
  console.log("Print after 1s");
});
wait(2000).then(() => {
  console.log("Print after 2s");
});
wait(3000).then(() => {
  console.log("Print after 3s");
});
