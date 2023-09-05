/*
   Topics:
        A. Recursive function 
        B. Print a code 10 times.
        C. 
        D. 

    Notes:
        * Je function nijei nijeke call kore and  loop er moto behave kore. But     
          terminate point / end position bole dite hoy. It's mandatory. otherwise it 
          work on infinity time.  
        * It's a expensive function for machine memory.
        * It's can be use for advance programming and we should work on it.

*/

// ----------------------------------------------------------------------------------->>

// Print a code 10 times using recursive
function sayHi10Times(n) {
  if (n === 0) {
    return;
  }
  console.log("Hi, I'm calling"); // It will print 10 times
  sayHi10Times(n - 1); // Recursive function
}
sayHi10Times(10);
