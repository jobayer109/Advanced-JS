/*
   Topics:
   ------------------------
         * Higher Order Function: 2 terms
            - Function can be pass as an argument.
            - Function can be return from another function.

         * Hidden concept:
            - Scope 
            - Closure
            - Execution context 
            - Hoisting

   Description:
   ------------------------
      1. Bad: Way to calculate random numbers.
      2. Good: Way to calculate random numbers. 
      3. Best: Way to calculate random numbers. 
*/

//-----------------------------------------------------------------
/* 
   1. Bad: Imperative way to calculate random numbers.
        This is a bad practice and after a long time if need to add more functionalities to calculate; it will create problem and break the DRY (Don't repeat yourself) rule.
*/

function randomSum1(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);

  return random1 + random2;
}

function randomSub1(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);

  return random1 - random2;
}

function randomSqrSum1(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);

  return random1 * random1 + random2 * random2;
}

//-----------------------------------------------------------------

/* 
   1. Good: Way to calculate random numbers.
        This is a kind of good practice and after a long time if need to add more functionalities to calculate; it will create problem and break the DRY (Don't repeat yourself) rule also
*/

function generateTwoRandomNum1(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);

  return {
    random1,
    random2,
  };
}

function randomSum(max) {
  const { random1, random2 } = generateTwoRandomNum1(max);
  console.log(random1, random2);
  return random1 + random2;
}

function randomSub(max) {
  const { random1, random2 } = generateTwoRandomNum1(max);
  return random1 - random2;
}

function randomSqrSub(max) {
  const { random1, random2 } = generateTwoRandomNum1(max);
  return random1 * random1 + random2 * random2;
}

randomSum(100); // using console.log -> generate random calculation
randomSub(10); // using console.log -> generate random calculation
randomSqrSub(50); // using console.log -> generate random calculation

//-----------------------------------------------------------------

/* 
   1. Best: Way to calculate random numbers using callback
        This is the best practice and after a long time if need to add more functionalities to calculate; it will work smoothly and must follow the DRY (Don't repeat yourself) rule also.
*/

function generateTwoRandomNum(max, whatDoYouWant) {
  const random1 = Math.floor(Math.random() * max + 1);
  const random2 = Math.floor(Math.random() * max + 1);

  const result = whatDoYouWant(random1, random2);
  return result;
}

// Print random number that we pass in the callback function
generateTwoRandomNum(100, (rand1, rand2) => {
  console.log("numbers", rand1, rand2);
});

// using console.log we can see the output
generateTwoRandomNum(10, (rand1, rand2) => rand1 + rand2);
generateTwoRandomNum(10, (rand1, rand2) => rand1 - rand2);
generateTwoRandomNum(10, (rand1, rand2) => rand1 * rand1 + rand2 * rand2);

//-----------------------------------------------------------------
