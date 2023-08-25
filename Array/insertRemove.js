/*
    Array methods:
    ------------------>
        Array length
        Array toString()
        Array pop() 
        Array push()
        Array shift()
        Array unshift()
        Array join()
        Array delete()
        Array concat()
        Array flat()
        Array splice()
        Array slice()
*/

//
//
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//
// Array toString()
arr.toString(); //  1,2,3,4,5,6,7,8

//
// Insert a element in the array without removing existing element.
/*
    Array.splice method takes 3 parameters:
        1. index number; where I want to insert a new element.
        2. Delete count number; how many element we want to delete.
        3. number's array; 3rd parameter a "1" ba "1" er besi number insert kora jay.
            Example: arr.splice(3, 1, 11, 44, 26, 89);
*/
arr.splice(3, 0, 11); //  [  1, 2, 3, 11, 4,  5, 6, 7,  8 ]
arr.splice(3, 2, 11); //  [  1, 2, 3, 11, 5, 6, 7,  8 ]
// console.log(arr);

//
//
const array = [45, 78, 14, 5, 16, 91, 23];
//
//  Delete element from the array.
array.splice(4, 2); //  [ 45, 78, 14, 5, 23 ]
// Here, 1st param is index num and 2nd is how many elements we want to delete.
