/*
   Topics:
        A. Primitive array sorting 
        B. Array of object sorting. 
        C. every() method.
        D. some() method.
        E. Different sorting process without if conditions.
        F. Find the Highest (or Lowest) Array Value.
        G. Math.min() & Math.max() method on an Array.

    A. Primitive array sorting:
       -----------------------
        * sort() method by default sort an primitive array to ascending order.

        * When the sort() function compares two values, it sends the values to the 
          compare function, and sorts the values according to the returned 
          (negative, zero, positive) value.

      ===> If the result is negative, a is sorted before b.

      ===> If the result is positive, b is sorted before a.

      ===> If the result is 0, no changes are done with the sort order of the two 
           values.


    Notes:
        => sort() method can change the main array.
       
        => In every() method, ekta kisu jodi condition er baire chole jay, tobe 
        array ti 'false' return korbe.

        => In some() method, ekta kisu jodi condition er moddhe pore jay, tobe array 
        ti 'true' return korbe.
*/

// ----------------------------------------------------------------------------------->>

// A. Primitive array sorting with callback function => "ascending order".

const arr = [1, 7, 6, 9, 5, 4, 9, 0, 5, 8, 5];

arr.sort(function (a, b) {
  if (a > b) {
    return 1; // if "-1", it will return to descending order
  } else if (a < b) {
    return -1; // if "1", it will return to descending order
  } else {
    return 0;
  }
});

arr; // [  0, 1, 4, 5, 5, 5, 6, 7, 8, 9, 9 ]

// ----------------------------------------------------------------------------------->>

// Array of object sorting with callback function.

const persons = [
  {
    name: "A",
    age: 19,
  },
  {
    name: "B",
    age: 45,
  },
  {
    name: "C",
    age: 12,
  },
  {
    name: "D",
    age: 23,
  },
];

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1; // if "-1", it will return to descending order
  } else if (a.age < b.age) {
    return -1; // if "1", it will return to descending order
  } else {
    return 0;
  }
});

persons;
/* [  
    { name: "C", age: 12 },  
    { name: "A", age: 19 },  
    { name: "D", age: 23 },  
    { name: "B", age: 45 },];
*/

// ------------------------------------------------------------------------------->>

//  C. every() method.
// In every() method, ekta kisu jodi condition er baire chole jay, tobe array ta   'false' return korbe.

const myArr = [1, 7, 6, 9, 5, 4, 9, 5, 8, 5];

const result1 = myArr.every(function (value) {
  return value >= 0; // true
});
result1; // true

// -------------------------------------------------------------------------------->>

// D. some() method. In some() method, ekta kisu jodi condition er moddhe pore jay, tobe array ti 'true' return korbe.

const myArr1 = [1, 7, 6, 9, 5, 4, 9, 5, 8, 5, -2];

const result2 = myArr1.some(function (value) {
  return value <= 0;
});
result2; // true

// -------------------------------------------------------------------------------->>

// E. Different sorting process.
// Regular function:
const sortArr = [150, 12, 4, 1, 9, 17, 22, -1, -8];
sortArr.sort(function (a, b) {
  return a - b;
});

sortArr; // [ -8, -1, 1, 4, 9, 12, 17, 22, 150 ]

// Arrow function:
sortArr.sort((a, b) => {
  return a - b;
});

sortArr; // [ -8, -1, 1, 4, 9, 12, 17, 22, 150 ]

// -------------------------------------------------------------------------------->>

//  F. Find the Highest (or Lowest) Array Value
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {
  return a - b;
});

points[0]; // Lowest value is: 1
points[points.length - 1]; // highest value is: 100

// Same method we can apply for descending order of an array.

// -------------------------------------------------------------------------------->>

// G. Math.min() & Math.max() method on an Array.

// Math.max.apply(null, [1, 2, 3]) is equivalent ----> Math.max(1, 2, 3).

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

const resMin = myArrayMin([40, 100, 1, 5, 25, 10]); // 1
const resMax = myArrayMax([40, 100, 1, 5, 25, 10]); // 100

// Custom approach:
function myArrMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
const maxRes = myArrMax([40, 100, 1, 5, 25, 10]);

// -------------------------------------------------------------------------------->>
