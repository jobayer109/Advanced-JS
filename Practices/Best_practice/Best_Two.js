/*
    Topics:
    ----------------------------------------
        A. null check before accessing a variable or key in object.
        B. 
        C. 
        D. 
        E. 
        F.  


    Notes:
    ------
        A. 
        -------------------------------------------------------
          * 
         
*/

// ----------------------------------------------------------------------------->>

// A. null check before accessing a variable or key in object.
// Way-1: using ternary operator.
const getNameInUpperCase = (name) => {
  return name ? name.toUpperCase() : "";
};
const result = getNameInUpperCase("Jobayer");
const result1 = getNameInUpperCase();
// console.log(result, result1);

// Way-2: Using OR || operator.
const getNameInLowerCase = (name) => {
  return (name || "").toString().toLowerCase();
};
const result2 = getNameInLowerCase("Hello");
// const result3 = getNameInLowerCase();
console.log(result2);
