// Nested Loop  বলতে একটি লুপের ভিতরে যদি আরো লুপ চলে বা থাকে তাহলে তাকে Nested Loop বলে।

let num = 20;

for (i = 1; i <= num; i++) {
  result = "";
  for (j = 1; j <= i; j++) {
    result += j + " ";
  }
  //   console.log(result);
}

//
//
//
// Make a squire pattern with '*'
let makeSquire = 10;

for (i = 1; i <= makeSquire; i++) {
  let result1 = "";
  for (j = 1; j <= makeSquire; j++) {
    result1 += "*" + " ";
  }
  console.log(result1);
}
