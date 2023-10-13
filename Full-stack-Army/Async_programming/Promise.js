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
