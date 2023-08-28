/*
    Topics:
        A. Object methods.
        B. Copy object from another object.


        A. Array methods:
            1. Object.keys(obj) ----> returns all keys to a array.
            2. Object.values(obj) ----> returns all values to a array.
            3. Object.entries(obj) ----> returns every key-value pair to a array 
                                         under a parent array. Multi-dimensional.

        B. Copy object from another object:
            1. Object.assign({}, obj) ----> returns a copied object of obj.
            2. Spread operator


*/

const obj = {
  name: "Jobayer",
  age: 27,
  city: "Rangpur",
};

Object.keys(obj); // [ 'name', 'age', 'city' ]
Object.values(obj); // [ 'Jobayer', 27, 'Rangpur' ]
Object.entries(obj); // [ [ 'name', 'Jobayer' ], [ 'age', 27 ], [ 'city', 'Rangpur' ] ]

// --------------------------------------------------------------------------------->>

// Copy object from a objects
// Two way: 1. assign method, 2. Spread operator

// Way -1 : Assign method
const copyObj = {
  name: "Jobayer",
  age: 27,
  city: "Rangpur",
};

const newObj = Object.assign({}, copyObj);
newObj.isMarried = true;

copyObj; // { name: 'Jobayer', age: 27, city: 'Rangpur' }
newObj; // { name: 'Jobayer', age: 27, city: 'Rangpur', isMarried: true }

//
// Way -2 : Spread operator
const spreadObj = { ...copyObj };
spreadObj; // { name: 'Jobayer', age: 27, city: 'Rangpur' }
