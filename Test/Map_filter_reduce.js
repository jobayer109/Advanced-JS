const users = [
  { firstName: "Nasir", lastName: "Uddin", age: 65 },
  { firstName: "Jobayer", lastName: "Ahmed", age: 27 },
  { firstName: "Tahima", lastName: "Xobayer", age: 22 },
  { firstName: "Taima", lastName: "Taberi", age: 1 },
];

// Array mapping
const getNames = users.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
// console.log(getNames);

// custom implementation
let names = [];
for (let i = 0; i < users.length; i++) {
  const fullName = `${users[i].firstName} ${users[i].lastName}`;
  names.push(fullName);
}
// console.log(names);

// ------------------------------------------------------------->>

// Array filtering
const sumFilter = users.filter((x) => (x.age > 30 ? x : ""));
console.log(sumFilter);

// Custom implementation array filtering
let filtered = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age > 30) {
    filtered = users[i];
  }
}
// console.log(filtered);

// ------------------------------------------------------------->>

// Array reducing
