/*
    Topics:
    -------
        A. Rest operator. 
        B. Spread operator.


    Notes:
    -------
        A. Rest operator.
        -----------------
            * When use three dots (...) in function parameter, then it called rest.
            * Write (...rest) operator at the last of all parameters 
              Example: (name, msg, ...rest).
           
           
        B. Spread operator:
        -------------------
            * 
*/

//----------------------------------------------------------------------->>

//  A. Rest operator --------------------------
// Bad and complex approach -------------------
function getSum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
getSum1(1, 2, 3, 4, 5, 6); // 21

// Best and simple approach -------------------
const getSum2 = (...rest) => {
  let sum = 0;
  for (let value of rest) {
    sum += value;
  }
  return sum;
};
getSum2(1, 2, 3, 2); // 8

//----------------------------------------------------------------------->>
