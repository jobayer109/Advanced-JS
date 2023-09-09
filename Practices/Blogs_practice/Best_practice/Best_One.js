/*
  Topics:
  ----------------
      A. Declare and initialize your variables at the top.
      B. Beware of recursion overuse.
      C. Be efficient with DOM manipulations.
      D. Make use of shorthand notation (Object Literals).
      E. Use Strict Mode to catch silent errors




*/

// 1. Declare and initialize your variables at the top

var n = 10;

function hello() {
  console.log(n);
}
hello();

// ---------------------------------------------------------------------------->>

// 2. Build modular, specialized functions
function table(columns, rows, item) {
  // creates table and searches it for the passed item
}

// compared to |> |>

function createTable(columns, rows) {
  //creates table
}

// ---------------------------------------------------------------------------->>

// 3. Recognize and remove duplicate code

// ---------------------------------------------------------------------------->>

// 4. Comment your code often

// ---------------------------------------------------------------------------->>

// 5. Beware of recursion overuse
function parent() {
  function sum() {
    function multi() {
      //this is too hard to follow and can likely be solved another way
    }
    multi();
  }
  sum();
}
parent();

// ---------------------------------------------------------------------------->>

// 6. Be efficient with DOM manipulations
/*
        Accessing the DOM is essential for getting the most out of your program, but 
        doing so repeatedly causes visual clutter and will slow down the program.

        Instead, access it once and cache it for later use in a variable. From then 
        on, you can access that variable instead of the DOM directly. This process 
        is visually cleaner and more efficient.

    Note: It’s best practice to mark any DOM reference with the '$' symbol.
*/

// ---------------------------------------------------------------------------->>

// 7. Avoid global variables at all costs

var myVar = "my global variable"; // This variable is declared as global
function localVariable() {
  var myVar = "my local variable"; // This is a locally declared variable
}

// ---------------------------------------------------------------------------->>

// 8. Make use of shorthand notation (Object Literals)

// Longhand Object:
var computer = new Object();
computer.caseColor = "black";
computer.brand = "Dell";
computer.value = 1200;
computer.onSale = true;

// Shorthand Object:
var computer = {
  caseColor: "black",
  brand: "Dell",
  value: 1200,
  onSale: true,
};

// Shorthand Array:
var computerBrands = ["Dell", "Apple", "Lenovo", "HP", "Toshiba", "Sony"];

// ---------------------------------------------------------------------------->>

// 9. Use Strict Mode to catch silent errors
// Without strict mode
x = 10; // This silently creates a global variable 'x'

// With strict mode
("use strict");
y = 20; // Throws a ReferenceError: y is not defined

console.log(x);
console.log(y);

// ---------------------------------------------------------------------------->>

// 11. Use template literals to combine strings

// ---------------------------------------------------------------------------->>

// 12. Solve existence testing with includes

// ---------------------------------------------------------------------------->>

// 11. Use template literals to combine strings
