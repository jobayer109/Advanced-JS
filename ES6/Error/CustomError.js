//----------------------------------------------------------------------->>

// C. Create custom Error with 'try-catch' with "class" function.

class CustomError extends Error {
  constructor(message) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

function tryCatch() {
  try {
    console.log("I am line 1");
    throw new CustomError("Ha ha ha, I'm Error");
    console.log("I am line 2");
    console.log("I am line 3");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("I am final output");
  }
}
tryCatch();
