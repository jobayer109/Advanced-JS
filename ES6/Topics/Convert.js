/*
    Topics:
    -------
        A. Convert Array to Object 
        B. Convert Object to Array.
        

    Notes:
    -------
        A. Convert Array to Object:
        ---------------------------
            * Use entries() method.
            * Example below
        
        B. Convert Object to Array:
        ---------------------------
            * Use fromEntries() method.
            * Example below.
*/

//----------------------------------------------------------------------->>

// A. Convert Array to Object:
const array = [1, 2, 3, 4, 5, 6];
Object.entries(array); // result ok

//----------------------------------------------------------------------->>

// B. Convert Object to Array:
const arrObj = [
  ["a", 10],
  ["b", 15],
  ["c", 78],
];

const result = Object.fromEntries(arrObj); // It works

//----------------------------------------------------------------------->>
