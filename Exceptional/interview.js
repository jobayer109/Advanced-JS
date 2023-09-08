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
console.log(newArr);

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
  console.log(a);
}

function bar() {
  var a = 3;
  foo();
}

var a;
a = 5;
bar();

// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
// ------------------------------------------------------------------->>
