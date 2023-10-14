/*
    Topics:
    ---------------------------------
        A. Basic Iterator
        B. Make an object Iterable
        C. 

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
// We can do any task as need and then recall the iterator function.
after(); // 3
after(); // 4
after(); // undefined

// ------------------------------------------------------------------

// B. Make an object Iterable

const range = {
  start: 0,
  stop: 100,
  step: 10,
};

range[Symbol.iterator] = function () {
  let current = this.start;
  let stop = this.stop;
  let step = this.step;
  return {
    next() {
      const obj = {
        value: current,
        done: current > stop,
      };
      current += step;
      return obj;
    },
  };
};

// const rangeIterator = range[Symbol.iterator]();
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());

// Now the 'range' object is iterable.
for (let v of range) {
  console.log(v);
}
