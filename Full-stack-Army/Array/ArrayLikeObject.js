/*
    You can create an object from the given array and then perform array-like operations on it by using numeric keys as properties of the object. Here's an example of how you can achieve this:
 */

const arr = ["Jobayer", "Taima", "Tahmi", "Tonima", "Ahmed"];

// Create an object with numeric keys
const obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[i] = arr[i];
}

/*
    Now you have an object like this:
     {
        0: "Jobayer",
        1: "Taima",
        2: "Tahmi",
        3: "Tonima"
        4: "Ahmed"
     }

*/

// You can perform array-like operations on this object:

// Accessing elements
console.log(obj[0]); // "Jobayer"

// Modifying elements
obj[1] = "Updated Taima";

// Adding elements
obj[4] = "New Element";

// Deleting elements
delete obj[2];

// Iterating through the object
for (const key in obj) {
  console.log(key, obj[key]);
}

// Checking for the length (number of elements)
const length = Object.keys(obj).length;
console.log("Length:", length);

/*
    By using numeric keys as properties, you can simulate array-like behavior with an object. However, keep in mind that arrays are specifically designed for ordered collections of data, and objects are meant for key-value pairs. While you can mimic array behavior with objects in this way, it's generally a better practice to use arrays when dealing with ordered lists of data.
*/
