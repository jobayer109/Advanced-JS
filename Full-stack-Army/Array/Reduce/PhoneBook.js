const names = [
  "Ashraful",
  "Aman",
  "Aksh",
  "Akib",
  "Badsha",
  "Bahadur",
  "Begum",
  "Gobindo",
  "Gias Uddin",
  "Prova",
  "Pritom",
  "Sultan",
  "Sagor",
  "Sohana",
  "Selim",
  "Suchorita",
  "Suchona",
  "Tahmina",
  "Taima",
  "Tanvir",
  "Tahsin",
];

const nameGroup = names.reduce((acc, cur) => {
  const firsLetter = cur[0].toUpperCase();

  if (firsLetter in acc) {
    acc[firsLetter].push(cur);
  } else {
    acc[firsLetter] = [cur];
  }

  return acc;
}, {});
Object.keys(nameGroup).forEach((groupKey) => {
  console.log(groupKey);
  ("\n");
  nameGroup[groupKey].forEach((n) => console.log(n));
});
