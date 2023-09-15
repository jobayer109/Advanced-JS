const users = [
  { firstName: "Nasir", lastName: "Uddin", age: 65 },
  { firstName: "Jobayer", lastName: "Ahmed", age: 27 },
  { firstName: "Tahima", lastName: "Xobayer", age: 22 },
  { firstName: "Taima", lastName: "Taberi", age: 1 },
];

const getNames = users.map(({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
});
// console.log(getNames);

// custom implementation
let names = [];
for (let i = 0; i < users.length; i++) {
  const fullName = `${users[i].firstName} ${users[i].lastName}`;
  names.push(fullName);
}
// console.log(names);
