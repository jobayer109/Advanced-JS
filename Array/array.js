/*
    We can declare a array in two ways:
        1. Storing in a variable (Literal way)
        2. With Array constructor. Ex: Array(1,2,3,4,5,6)
*/
//
// Array declaration:
const declaration1 = [22, 6, 56, 965, 6956]; // Literal way
const declaration2 = Array(1, 5, 4, 56, 4); // constructor

//
// Explore array methods bellow:

const arr = [1, 2, 3, 4, 5, 6];

// Accessing elements
arr; // [1, 2, 3, 4, 5, 6]
arr[1]; // 2
arr[5]; // 6

//
// Overwrite the elements
arr[2] = 33; //  [ 1, 2, 33, 4, 5, 6 ]

//
//  Add new element in a array.
/* 
    আমরা ২ ভাবে অ্যারের মধ্যে ডাটা পুশ করতে পারি। 
        ১. Array -এর ইলিমেন্টগুলোর ইনডেক্স নাম্বার হিসাব করে পুশ করতে পারি। 
        ২. Random  যেকোনো ইনডেক্স নাম্বার ইনপুট দিয়ে ডাটা পুশ করতে পারি।
            পুশ করা িইনডেক্স নাম্বার যদি এরের ইনডেক্সের থেকে বেশী হয় তাহলে মাঝখানের 
            ইনডেক্সগুলো Empty data  হিসেবে ইনজেক্ট হয় এবং ডাটা টাইপ হয় 'undefined' 
*/

arr[6] = 12; // [  1, 2, 33, 4, 5, 6, 12 ]
arr[8] = 22; //  [ 1, 2, 33, 4, 5, 6, 12, <1 empty item>, 22 ]
arr[15] = 100; //   [ 1, 2, 33, 4, 5, 6, 12, <1 empty item>, 22, <6 empty items>, 100 ]

console.log(arr);
