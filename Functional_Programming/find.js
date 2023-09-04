/*

  Topics:
        1. find() and findIndex() methods
        2. Array traverse using find() and findIndex() method.
        3. Custom implementation of find() and findIndex() method.

   Notes:
        * find() use to find out a specific element of an array.
        * findIndex() use to find out a specific element's index number of an array.
       
       
   => find(): find calls predicate once for each element of the array, in ascending 
              order, until it finds one where predicate returns true. If such an element 
              is found, find immediately returns that element value. Otherwise, find 
              returns undefined. Returns the value of the first element in the array 
              where predicate is true, and undefined otherwise.

   => findIndex(): Returns the index of the first element in the array where predicate 
              is true, and -1 otherwise.      
*/

// ----------------------------------------------------------------------------------->>

// Array traverse using find() and findIndex() method.

const arr = [5, 77, 98, 44, 78, 3, 3, 32];

const found = arr.find(function (value) {
  //   return value; // If I return only value it only return 1st element of the array.
  return value === 3;
});
found; // 3

// ---------------------<<

const foundIndex = arr.findIndex(function (value) {
  return value === 32;
});
foundIndex; // index number: 7

// ----------------------------------------------------------------------------------->>

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    } else {
      return "The invalid input";
    }
  }
}

const res = find(arr, function (value, index, arr) {
  return value === 78;
});
res; // 78

// ---------------------<<

function findIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}

const result = findIndex(arr, function (value) {
  return value === 78;
});
result; // 4; (index number of 78)
