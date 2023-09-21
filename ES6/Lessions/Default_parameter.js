/*
    Topics:
    -------
        A. Default parameter syntax.
        B. null and undefined use case in Default parameter.
        C. 


    Notes:
    -------
        A. Default parameter syntax.
        ---------------------------
            * If we didn't pass any arguments with function call, we can set a 
              default value with parameter with equal sign.
       
       
        B. null and undefined use case in Default parameter.
        ---------------------------------------------------
            * We can't pass "null and undefined" as arguments, because "null and   
              undefined" has no length as string
*/

//----------------------------------------------------------------------->>

// A. Default parameter syntax.
const sqr = (n = 1) => {
  return n * n;
};
const res1 = sqr(); // 1
const res2 = sqr(5); // 25

//----------------------------------------------------------------------->>

// B. null and undefined use case in Default parameter

// Example - 1:----------------------
const greet = (name = "Mr. Jobayer", msg = "good night") => {
  name.length; // 11
  return `${name}, ${msg}!`;
};
const res3 = greet(); // Mr. Jobayer, good night!
const res4 = greet(); // Mr. Jobayer, good night!

// Example - 2:----------------- null and undefined issue
const greetNull = (name = "Mr. Jobayer", msg = "good night") => {
  name.length;
  // TypeError: Cannot read properties of null (reading 'length')
  return `${name}, ${msg}!`;
};
// Output:
// const res5 = greetNull(null, "good morning"); // error
