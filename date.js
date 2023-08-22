const date = new Date();

console.log(date.toLocaleDateString()); // 8/22/2023
console.log(date.toTimeString()); // 20:45:18 GMT+0600 (Bangladesh Standard Time)
console.log(date.toDateString()); // Tue Aug 22 2023
//
//
console.log(date.getFullYear()); // 2023
console.log(date.getMonth()); // 7  Because JavaScript counts months from 0 to 11
console.log(date.getDate()); // 22
//
//
console.log(date.getHours()); // 20 [according to 24 hours ]
console.log(date.getMinutes()); // 48
console.log(date.getSeconds()); // 45
//
//
const date1 = new Date(2023, 7, 22, 20, 65, 39, 0);
console.log(date1.toDateString());
console.log(date1.toTimeString());
//
//
//
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
// You should use at least 2 parameter, otherwise return ms.
const d = new Date(2023, 11);
const d1 = new Date(2023);
console.log(d);
console.log(d1);
