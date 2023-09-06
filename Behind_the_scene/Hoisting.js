/*
  Notes: 
      * Declared function is accessible or can call from anywhere.
     
      * But first-class function jeta kina ekta variable a store kora jay, setake 
        jekhane declare kora hoyece tar upor theke access kora jayna. seta undefined 
        hoye jay. Example: 19 no. line.
*/

//
"use strict";
print(500);
var a = 100;

print(10);

typeof newPrint; // undefined

// newPrint(a); // This is not function and create error.

var newPrint = print;
newPrint(45);

function print(a) {
  console.log(a);
}

print(a);
