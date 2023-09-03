/*
   Notes:
        * Jodi kono scope a baire theke data ase take closure bole.
       
*/

// ----------------------------------------------------------------------------------->>

let a = "Global scope";

function func() {
  let b = "Jobayer Ahmed";

  return function () {
    console.log(b);
  };
}

const result = func();
console.dir(result);
