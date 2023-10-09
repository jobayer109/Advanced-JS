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
  /*
      cur    ----> cur means all element of an array.
      cur[0] ----> cur[0] means 1st char of an element.
      acc    ----> acc means previous value.
  */
  const firsLetter = cur[0].toUpperCase();
  // console.log("acc", acc);

  if (firsLetter in acc) {
    acc[firsLetter].push(cur);
    // console.log("push", acc[firsLetter].push(cur));
  } else {
    acc[firsLetter] = [cur];
  }
  return acc;
}, {});

// Object.keys(nameGroup).forEach((groupKey) => {
//   console.log(groupKey);
//   ("\n");
//   nameGroup[groupKey].forEach((n) => console.log(n));
// });
