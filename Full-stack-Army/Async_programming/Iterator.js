/*
    Topics:
    ---------------------------------
        A. Basic Iterator
        B. Iterable
        C. Iterate

    Notes:
    ---------------------------------
      * Iterator is an Object that (loop) is under controlled.
      * Iterate means loops or traverses anything.
      * Iterable means that capable to iterate.
      * It knows present condition, but doesn't know the matter what 
        will happened in the future.

*/
// ------------------------------------------------------------------

// A. Basic Iterator
const arr = [1, 2, 3, 4];

let index = 0;
function after() {
  arr[index++];
  return index;
}
after(); // 1
after(); // 2
after(); // 3
after(); // 4
after(); // undefined

// ------------------------------------------------------------------
const obj = {
  x: 10,
  y: 15,
  z: 56,
};

for (let key in obj) {
  key; // x; y; z;
  obj[key]; // 10; 15; 56;
}
