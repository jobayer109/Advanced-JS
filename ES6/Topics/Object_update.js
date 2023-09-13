/*
    Topics:
    -------
        A. Bad and best practice of Writing property and value 
        B. 


    Notes:
    -------
        A. 
        -----------------
            * 
*/

//----------------------------------------------------------------------->>

//Bad and best practice of Writing property and value
let a = 10;
let b = 12;

// Bad practice / old syntax ---------------
const obj1 = {
  a: a,
  b: b,
  print: function () {
    console.log(this);
  },
};
// obj1.print();

// Best practice / new syntax --------------
const object2 = {
  a,
  b,
  print() {
    console.log(this);
  },
};

// object2.print();
