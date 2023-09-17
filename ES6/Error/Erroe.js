/*
    Topics:
    -------
        A. Error definition
        B. 
        C. 


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
  throw new Error("error");
}
