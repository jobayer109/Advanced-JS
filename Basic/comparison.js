// if condition
const num = 11;

if (num % 2 === 0) {
  console.log(`11 is a even number `);
} else {
  console.log(`11 is a odd number `);
}

//
// Syntax of IF condition:
/*
        if (condition1) {
            block of code to be executed if condition1 is true
        } else if (condition2) {
            block of code to be executed if the condition1 is false and condition2 is true
        } else {
            block of code to be executed if the condition1 is false and condition2 is false
        }
*/

//
//
// Switch case:
const date = new Date();
const today = date.getDay(); // 2

switch (today) {
  case 0:
    console.log(`Today is Sunday`);
    break;

  case 1:
    console.log(`Today is Monday`);
    break;

  case 2:
    console.log(`Today is Tuesday`);
    break;

  case 3:
    console.log(`Today is Wednesday`);
    break;

  case 4:
    console.log(`Today is Thursday`);
    break;

  case 5:
    console.log(`Today is Friday`);
    break;

  case 6:
    console.log(`Today is Saturday`);
    break;

  default:
    console.log("The number you entered is invalid");
    break;
}
