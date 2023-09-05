/*
   Topics:
        A. Function composition 

    Notes:
        * যদি একটা ফাংশনের Input আকারে আরেকটা ফাংশন-এর Output দেওয়া যায়, তাকে  
          ফাংশন কম্পোসিশন বলে। 
        * 
*/

// ----------------------------------------------------------------------------------->>

function print(info) {
  console.log(info);
}

function multiply(n) {
  return n * 5;
}

function addition(a, b) {
  return a + b;
}

print(multiply(addition(3, 5))); // 40
