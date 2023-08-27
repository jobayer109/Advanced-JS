// Only keep first object in array with property value
const arr = [
  {
    name: "John",
    location: "Los Angeles",
  },
  {
    name: "Kate",
    location: "New York",
  },
  {
    name: "Mike",
    location: "New York",
  },
];

const unique = arr.filter(
  (obj, index) => arr.findIndex((item) => item.location === obj.location) === index
);
/*
   [
     { name: 'John', location: 'Los Angeles' },
     { name: 'Kate', location: 'New York' }
   ]
 */
// console.log(unique);

// ----------------------------------------------------------------------------->>

//
