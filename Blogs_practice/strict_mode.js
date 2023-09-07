// Without strict mode
x = 10; // This silently creates a global variable 'x'
console.log(x);

("use strict");
// With strict mode
y = 20; // Throws a ReferenceError: y is not defined

console.dir(y);
