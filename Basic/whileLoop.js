/*
    for loop and while loop - এদের কাজ একই । তবে এদের মাঝে Syntax -এর পার্থক্য আছে। 
    নিচের ২য় উদাহরণ থেকে আমরা বুঝতে পারবো যে, এই ধরণের কন্ডিশন নিয়ে কাজ করতে গেলে 
    while loop ব্যবহার করা উচিত।

    It's more flexible than a 'for loop'
*/

// Example -1:
let i = 0;
while (i < 10) {
  //   console.log("I am the best programmer");
  i++; // must set it, otherwise loop will be infinity
  //   i--;  Infinity loop
}
//
//
//  Example -2:
let isRunning = true;
while (isRunning) {
  const rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner winner chicken dinner"); // Print it while condition will meet
    isRunning = false;
  } else {
    console.log(`We have got: ` + rand); // Print others random number
  }
}
