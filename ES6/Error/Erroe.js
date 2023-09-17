/*
    Topics:
    -------
        A. Error definition
        B. Error handling with 'if-else'
        C. Error handling with 'try-catch'


    Notes:
    -------
        A. Error definition:
        --------------------
            * Error 'objects' are thrown when runtime errors occur. 
*/

//----------------------------------------------------------------------->>

// A. Error definition:
let n = 10;
if (n > 5) {
  //   throw new Error("error");
}

//----------------------------------------------------------------------->>

// B. Error handling with 'if-else'

function parseToInt(v) {
  const result = Number.parseInt(v);

  if (!result) {
    return "Please provide a valid number";
  }
  return result;
}

const output1 = parseToInt("45.65h"); //  45
const output2 = parseToInt("t45.65h"); // Error message
const output3 = parseToInt("Jobayer"); // Error message
// console.log(output3);

//----------------------------------------------------------------------->>

// C. Error handling with 'try-catch' and  finally.
function tryCatch() {
  try {
    console.log("I am line 1");
    throw new Error("Ha ha ha, I'm Error");
    console.log("I am line 2");
    console.log("I am line 3");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("I am final output");
  }
}
// tryCatch();
