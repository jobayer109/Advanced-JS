/*
    1. Make a timer using Promise (Interview Question)
    2. Real promise practice
    3. Simple Promise

*/
// -------------------------------------------------------------

// 2. Real promise practice

// -------------------------------------------------------------

// 1. Make a timer using Promise (Interview Question)
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

// -------------------------------------------------------------

// 3. Simple Promise
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
