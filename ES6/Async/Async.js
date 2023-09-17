console.log("The line number 1");

setTimeout(() => {
  console.log("The line number 2");
}, 3000);

setTimeout(() => {
  console.log("The line number 3");
}, 0);

console.log("The line number 4");

setTimeout(() => {
  console.log("The line number 5");
}, 1000);
