//
//
// It use in loops to stop code execution
while (true) {
  let rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 8) {
    console.log("Winner winner chicken dinner");
    break; // Break statement to stop the loop
  } else {
    console.log("Other numbers are: " + rand);
  }
}

//
//
//
for (i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    break;
  } else {
    console.log("p");
  }
}
