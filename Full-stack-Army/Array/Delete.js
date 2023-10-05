const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

//--------------------------------------

// splice() and findIndex() method ----> mutable
const index = arr.findIndex((v) => v.id === 4);
// const newArr = arr.splice(index, 1);

// -----------------------------------------

// Filter() method -> Immutable
const filtered = arr.filter((item) => item.id !== 4);
console.log(filtered);
