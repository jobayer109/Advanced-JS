let x = "This is text";
let y = "This is text";
let z = `This is another text`;

let text1 = String(`Hello`);
let text2 = String("Gello");
let text3 = String("1010");
let text4 = String(100);
let text5 = 100;
// console.log(text1, text2, text3, text4, text5);

/*
    Number কে ৩ ভাবে String-এ রুপ দেয়া যায়।
    
    let num = 10;

    1. String(num)
    2. num.toString
    3. num + ""
*/

//
//
// Lexicographical order: String comparison
// Example- 1:
let a = "abc";
let b = "bcd";

a === b; // false   Lexicographical order
a > b; // false     Lexicographical order
a < b; // true      Lexicographical order

//
// Example- 2:
let p = "abc";
let q = "adc";

p === q; // false
p > q; // false
p < q; // true

//
// Example- 3:
let xx = "aaaaz";
let yy = "aaaaZ";
xx === yy; // false
xx > yy; // true
xx < yy; // false

//
/*
    গুরুত্বপূর্ণ নোট: 
        * ‍unicode point of 'a' is less than every number from 'b' to 'z'.
        * Small 'a' is greater than capital 'A'.
        * Similarly, small 'z' is greater than capital 'Z'.
        * 
        * উদাহরণ ২ ও ৩ - এ একটা বিশেষ বিষয় কেয়াল করার আছে। 
        * সেটা হলো - যদি String - এর প্রথম ক্যারেক্টারগুলো মিলে যায় 
        * তাহলে সেগুলো অমিট হয়ে যাবে এবং তার পরের ক্যারেক্টারগুলোর মাঝে তুলনা হবে।
*/

//
// As same as another example oof above
let str1 = "I love you";
let str2 = "I love you too";
str1 === str2; // false
str1 > str2; // false
str1 < str2; // true

//
// Empty string vs other string:
let m = "";
let n = "too";
m === n; // false
m > n; // false
m < n; // true

//
// Another experiment on string about string reverse.
let reversed1 = "too";
reversed1.split("").reverse().join(""); // oot
//
//
let reversed2 = "I love you";
reversed2.split("").reverse().join(""); // uoy evol I
