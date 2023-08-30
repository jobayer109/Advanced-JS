/*
    Topics:
        A. what is arguments ?
        B.
        C.

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
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addFunc(2, 5); // 7
addFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
