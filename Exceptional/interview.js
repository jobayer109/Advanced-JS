// ------------------------------------------------------------------->>

if (1 === -1) {
  // console.log("Ok");
} else {
  // console.log("Not ok");
}

// ------------------------------------------------------------------->>

Number("0"); // 0
Number("1"); // 1
Number(""); // 0
Number(" "); // 0

// ------------------------------------------------------------------->>

// A Closer Look at the + and - Operators
1 + "1" - 1; // 10

// ------------------------------------------------------------------->>

// Duplicating Array Elements

// Wrong code:

// function duplicate(array) {
//   let arra = [];
//   for (var i = 0; i < array.length; i++) {
//     array.push(array[i]);
//   }
//   return arra;
// }

// const arr = [1, 2, 3];
// const newArr = duplicate(arr);

// console.log(newArr());

// ----------------------->>

// Right code:
function duplicate(array) {
  var initialLength = array.length; // Store the initial length
  for (var i = 0; i < initialLength; i++) {
    array.push(array[i]); // Push a duplicate of each element
  }
  return array;
}

const arr = [1, 2, 3];
const newArr = duplicate(arr);
newArr; // [ 1, 2, 3, 1, 2, 3 ]

/*
    The duplicate function uses a loop to go through each item in the given array. But 
    inside the loop, it is adding a new element at the end of the array, using the push
    () method. This makes the array longer each time, creating a problem where the loop 
    never stops. The loop condition (i < array.length) always stays true because the 
    array keeps getting bigger. This makes the loop go on forever, causing the program 
    to get stuck.

    To address the problem of the infinite loop caused by the growing array length, you 
    can store the initial length of the array in a variable before entering the loop. 
    Then, you can use this initial length as the limit for the loop iteration. This way, 
    the loop will only run for the original elements in the array and won’t be affected 
    by the array’s growth due to duplicates being added.
*/

// ------------------------------------------------------------------->>

// Scope
function foo() {
  // console.log(a);
}

function bar() {
  var x = 3;
  foo();
}

var x;
x = 5;
bar();

// ------------------------------------------------------------------->>

// Object Coercion (জবরদস্তি) ----> object conversion
const obj = {
  valueOf: () => 42,
  toString: () => 27,
};
obj + ""; // 42; This happened for 'Object conversion'.

// ------------------------------------------------------------------->>

// Understanding Object Keys
let a = {};
let b = { key: "test" };
let c = { key: "test" };

a[b] = "123"; // Here, used 'object' as key in the 'object'. -----> [object Object]: "123"
a[c] = "456";

a; // { '[object Object]': '456' }

/*
JavaScript employs the default toString() method to convert object keys into strings. But why? In JavaScript, object keys are always strings(or symbols), or they are automatically converted to strings via implicit coercion. When you use any value other than a string (e.g., a number, object, or symbol) as a key in an object, JavaScript will internally convert that value to its string representation before using it as a key.

Consequently, when we use objects b and c as keys in object a, both are transformed into the same string representation: [object Object]. 
*/

// ------------------------------------------------------------------->>

// The Double Equals Operator
[] == ![]; // true
[] == []; // false

[] === ![]; // false
[] === []; // false

// ------------------------------------------------------------------->>

// Closure
const closureArr = [10, 12, 15, 21];
for (var j = 0; j < closureArr.length; j++) {
  // use let to resolve this issue.
  setTimeout(function () {
    console.log("Index: " + j + ", element: " + closureArr[j]);
  }, 2000);
}

/*

Due to the concept of closures and how JavaScript handles variable scope, the actual output will be different. When the setTimeout callbacks are executed after the delay of 3000 milliseconds, they will all reference the same variable i, which will have a final value of 4 after the loop has been completed. As a result, the output of the code will be:

    Index: 4, element: undefined
    Index: 4, element: undefined
    Index: 4, element: undefined
    Index: 4, element: undefined

This behavior occurs because the var keyword does not have a block scope, and the setTimeout callbacks capture the reference to the same i variable. When the callbacks execute, they all see the final value of i, which is 4, and try to access arr[4], which is undefined.

To achieve the desired output, you can use the let keyword to create a new scope for each iteration of the loop, ensuring that each callback captures the correct value of i

*/

// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
