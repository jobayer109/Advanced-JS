/*
    Topics:
        A. Function in another function
*/
//

// -------------------------------------------------------------------------------->>

// Function in another function
function mainFunc(greet, name) {
  function subFunc() {
    // console.log(greet + " " + name);
  }
  subFunc();
}

mainFunc("Good morning", "Jobayer Ahmed");

// -------------------------------------------------------------------------------->>

// Different approach
function greetingFunc(greet, name) {
  function firstName() {
    if (name) {
      return greet + " " + name.split(" ")[1];
    } else {
      return "";
    }
  }
  const message = greet + " " + firstName();
  return message;
}

const result = greetingFunc("Welcome", "Jobayer Ahmed");
console.log(result);
