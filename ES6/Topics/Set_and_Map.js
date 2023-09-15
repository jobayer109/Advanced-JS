/*
    Topics:
    -------
        A. Set  
        B. Map
        

    Notes:
    -------
        A. Set:
        ---------------------------
            * Set is a constructor.
            * It doesn't allow duplicate elements.
            * it is an object.
            * we can add element with add() method from outside as like object.
        
        B. Map:
        ---------------------------
            * 
*/

//----------------------------------------------------------------------->>

// A. Set -------------------
const set = new Set([1, 2, 5, 3]);

// Add element
set.add(10);
set.add(5); // Didn't add. Bcz, 5 a duplicate element

// Some methods of set
set.has(6); // false
set.delete(6); // 6 isn't in here. so, it returns "false". If has, it'll delete.
// console.log(set.entries(5));

console.log(set);
