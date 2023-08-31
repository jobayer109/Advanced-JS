/*

Pure functions: These functions have two main properties. First, they always produce the same output for same arguments irrespective of anything else. 
Secondly, they have no side-effects i.e. they do not modify any arguments or local/global variables or input/output streams. 
Later property is called immutability. The pure function’s only result is the value it returns. They are deterministic. 
Programs done using functional programming are easy to debug because pure functions have no side effects or hidden I/O. Pure functions also make it easier to write parallel/concurrent applications. When the code is written in this style, a smart compiler can do many things – it can parallelize the instructions, wait to evaluate results when needing them, and memorize the results since the results never change as long as the input doesn’t change. 
example of the pure function: 

*/

sum(x, y); // sum is function taking x and y as arguments
return x + y; // sum is returning sum of x and y without changing them

fib(n);
if (n <= 1) return 1;
else return fib(n - 1) + fib(n - 2);

x = x + 1; // this changes the value assigned to the variable x.
// So the expression is not referentially transparent.
