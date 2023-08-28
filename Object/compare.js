/*
    Topics:
        A. Object compare.


            A. Object compare in 2 ways:
                1. Logic apply
                2. converting a obj to string

*/
// -------------------------------------------------------------------->>

// Object compare by applying logic
const obj1 = {
  userName: "Jobayer",
  age: 27,
  city: "Rangpur",
  isMarried: true,
};

const obj2 = {
  userName: "Jobayer",
  age: 27,
  city: "Rangpur",
  isMarried: true,
};

if (
  obj1.userName === obj2.userName &&
  obj1.age === obj2.age &&
  obj1.city === obj2.city &&
  obj1.isMarried === obj2.isMarried
) {
  console.log("Objects are same");
} else {
  console.log("objects are different");
}

// -------------------------------------------------------------------->>

// Object compare by converting obj to string by JSON
const obj3 = {
  userName: "Jobayer",
  age: 27,
  city: "Rangpur",
  isMarried: true,
};

const obj4 = {
  userName: "Jobayer",
  age: 28,
  city: "Gaibandha",
  isMarried: true,
};

console.log(JSON.stringify(obj3) === JSON.stringify(obj4)); // false

// -------------------------------------------------------------------->>
