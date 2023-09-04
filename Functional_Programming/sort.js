/*
   Topics:
        A. Primitive array sorting 
        B. Array of object sorting. 
        C. every() method.
        D. some() method.

    A. Primitive array sorting:
       -----------------------
        * sort() method by default sort an primitive array to ascending order.


    Notes:
        => sort() method can change the main array.
       
        => In every() method, ekta kisu jodi condition er baire chole jay, tobe array ti 
          'false' return korbe.

        => In some() method, ekta kisu jodi condition er moddhe pore jay, tobe array ti 
          'true' return korbe.
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

// ----------------------------------------------------------------------------------->>

//  C. every() method.
// In every() method, ekta kisu jodi condition er baire chole jay, tobe array ta        'false' return korbe.

const myArr = [1, 7, 6, 9, 5, 4, 9, 5, 8, 5];

const result1 = myArr.every(function (value) {
  return value >= 0; // true
});
result1; // true
