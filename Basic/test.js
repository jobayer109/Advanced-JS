// var a = "TOP";

// function func() {
//   var a = 10;
//   a = 20;
//   console.log(a);
// }
// func();

//
//

var x = "Global";
{
  var x = "Block";
}
x = "Change " + x;
// console.log(x);

let y = 10;
{
  let y = 12;
}

y = 15;

// console.log(y);

var p = 2; // Allowed
var p = 3; // Allowed
// p = 4; // Allowed
// console.log(p);

//
//
const arr = [1, 23, 5, 54, 8, 7];
const res = arr.push((x = -1));
// console.log(res);

// // console.log("5" + undefined);

var name = "Jobayer Ahned";
function A() {
  B();
  var a = "I'm function A";
  console.log(a);
}
function B() {
  C();
  var b = "I'm function B";
  console.log(b);
}
function C() {
  console.log("Hello " + name);
  var c = "I'm function C";
  console.log(c);
}
A();
