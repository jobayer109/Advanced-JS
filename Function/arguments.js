/*
    Topics:
        A. what is arguments ?
        B. Addition of random number in arguments:
        C. Multiplication of random number in arguments:

*/
//

// -------------------------------------------------------------------------------->>

// what is arguments ?
function argInFunc() {
  console.log(arguments); // It's a array like object.
}
argInFunc(); // [Arguments] {}
argInFunc(2, 8, 9); // [Arguments] { '0': 2, '1': 8, '2': 9 }

// -------------------------------------------------------------------------------->>

// Addition of random number in arguments:
function addFunc() {
  // Here parameter isn't mandatory.
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addFunc(2, 5); // 7
addFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// -------------------------------------------------------------------------------->>

// Multiplication of random number in arguments: for-in loop applied
function multiFunc() {
  let multi = 1;
  for (let i in arguments) {
    multi *= arguments[i];
  }
  console.log(multi);
}

multiFunc(3, 3); // 9
multiFunc(3, 3, 3, 4, 8, 6); // 5184
