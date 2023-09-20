/*
    Topics:
    -------
        A. What is promise?
        B. Simple promise.

    Notes:
    ------
        A. What is promise?
        --------------------

*/

//-------------------------------------------------------------------------->>

// B. Simple promise____________
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Default value");
});
p1.then((value) => {
  //   console.log(value); // Output
}).catch((error) => {
  console.log(error);
});

//-------------------------------------------------------------------------->>
