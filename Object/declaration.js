/*
    Object declaration in 3 ways
        1. Literal object 
        2. const obj1 = Object() ---->  constructor
        3. const obj2 = new Object()  ---->  constructor with new keyword
*/

// ------------------------------------------------------------------------->>

// Way - 1 : Literal declaration: means direct write code without other actions
const obj = {
  firstName: "Jobayer",
  lastName: "Ahmed",
  age: 27,
  city: "Rangpur",
};

obj; //{ firstName: 'Jobayer', lastName: 'Ahmed', age: 27, city: 'Rangpur' }

// ------------------------------------------------------------------------->>

// Way - 2 : Object constructor
const obj1 = Object();
obj1.x = 10;
obj1.y = 11;
obj1.z = 12;

obj1; // { x: 10, y: 11, z: 12 }

// ------------------------------------------------------------------------->>

// Way - 3 : constructor with 'new' keyword
const obj2 = new Object();
obj2.p = 13;
obj2.q = 14;
obj2.r = 15;

obj2; // { p: 13, q: 14, r: 15 }

// ------------------------------------------------------------------------->>
