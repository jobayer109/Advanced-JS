/*
    Topics:
    -------
        A. Data structure info
        B. Set (data structure)  
        C. Map (data structure)
        D. WeakSet (only for objet)
        

    Notes:
    -------
        A. Data structure info:
        ---------------------------
            * Using Set and Map, we can convert an array to an object.
            * Creating Map and Set constructor, we can use that as like as object 
              related operations. 
            * This is an advanced topic.
           
           
        B. Set (data structure):
        ---------------------------
            * Set is a constructor.
            * It doesn't allow duplicate elements.
            * it is an object.
            * we can add element with add() method from outside as like object.
        
        C. Map (data structure):
        ---------------------------
            * As same as Set, but there are some differences between them.
            * In the structure, should say the "values" and "keys" in an array 
              inside the parent array.
            * Can be set any kinds of primitive data and objects.
            * To set anything there is set() method, instead of add() method.
            * for-of loop is something exceptional. Be aware about that.
        
        
        D. WeakSet (only for objet):
        ---------------------------
            * It deals with object, not for another data types.
            * If we reassign an object with "null". Normal "Set" can't replace it.
            * Using "weakSet", we can resolved the problem.
            * Allowed methods: add(), has(), delete()
            * We can't apply iteration.
*/

//----------------------------------------------------------------------->>

// A. Set (data structure) -------------------
const set = new Set([1, 2, 5, 3]);

// Add element
set.add(10);
set.add(5); // Didn't add. Bcz, 5 a duplicate element

// Some methods of set
set.has(6); // false
set.delete(6); // 6 isn't in here. so, it returns "false". If has, it'll delete.
// console.log(set.entries(5));

//----------------------------------------------------------------------->>

// A.Map (data structure) -------------------
const map = new Map([
  ["a", 10],
  ["b", 12],
  ["c", 15],
]);

map; // Map(3) { 'a' => 10, 'b' => 12, 'c' => 15 }. It's an object

// set() method
map.set("f", 10);
map.forEach((v, k) => {
  v, k; // Returns key value pairs
});

// for-of loop in map.
for (let [k, v] of map) {
  k, v; // Returns key value pairs
}
// There are more useful methods in map data structure

//----------------------------------------------------------------------->>

//  D. WeakSet (only for objet):
const x = { x: 10 };
const y = { y: 20 };

const weakSet = new WeakSet([x, y]); // Read only object.

// Methods apply:
const z = { z: 30 };
weakSet.add(z);
console.log(weakSet);
