// Long-hand
const isVowel1 = (letter) => {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return true;
  }
  return false;
};

// Short-hand
const isVowel = (letter) => ["a", "e", "i", "o", "u"].includes(letter);
// console.log(isVowel("i"));

//----------------------------------------------------------------------------->>

// for-of (array)
const arr = [1, 8, 3, 4, 5];
// Long-hand
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  // .console.log(element);
}

// Short-hand
for (const element of arr) {
  //   console.log(element);
}

// ----------------------------------------------------------------------------->>

// for-in (object)
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Long-hand
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = obj[key];
  //   console.log(value); // 1 2 3
}

// Short-hand
for (const key in obj) {
  const value = obj[key];
  //   console.log(value); // 1 2 3
}

// ----------------------------------------------------------------------------->>

// Falsy value check

// Long-hand
// const isFalsey = (value) => {
//   if (
//     value === null ||
//     value === undefined ||
//     value === 0 ||
//     value === false ||
//     value === NaN ||
//     value === ""
//   ) {
//     return true;
//   }
//   return false;
// };

// Short-hand
const isFalsey1 = (value) => !value;
console.log(isFalsey1(null)); // true
console.log(isFalsey1(" ")); // false

// ----------------------------------------------------------------------------->>

// Ternary operator

// Long-hand
let info;
if (value < minValue) {
  info = "Value is too small";
} else if (value > maxValue) {
  info = "Value is too large";
} else {
  info = "Value is in range";
}

// Short-hand
const infos =
  value < minValue
    ? "Value is too small"
    : value > maxValue
    ? "Value is too large"
    : "Value is in range";

// ----------------------------------------------------------------------------->>

// Function call:

function f1() {
  // ...
}
function f2() {
  // ...
}

// Long-hand
if (condition) {
  f1();
} else {
  f2();
}

// Short-hand
(condition ? f1 : f2)();

// ----------------------------------------------------------------------------->>

// Switch shortcut

const dayNumber = new Date().getDay();

// Long-hand
let day;
switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// Short-hand
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
const dayy = days[dayNumber];

// ----------------------------------------------------------------------------->>

// Fallback values
// The || operator can set a fallback value for a variable.

// Long-hand
let name;
if (user?.name) {
  name = user.name;
} else {
  name = "Anonymous";
}

// Short-hand
const name1 = user?.name || "Anonymous";
