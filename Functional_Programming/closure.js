/*
   Notes:
        * Jodi kono scope a baire theke data ase take closure bole.
        * The name "console.dir" is derived from its primary function, which is to 
          display the directory or structure of an object.
        * console.log is used for basic text-based logging, while console.dir is used 
          for exploring and inspecting the structure of JavaScript objects in a more 
          detailed and interactive manner. 
       
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
console.dir(result); // Run this code in chrome dev tool for better understand.
