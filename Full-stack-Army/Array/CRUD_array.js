/*
    Requirements:
    -------------
        - Create an array of 10 students
        - id
        - name
        - email

*/

/* 
    Advantage and disadvantage of using array
        - Easily Traverse
        - Filter
        - Delete
        - Update (medium)
        - Create a new one.
            * push -> easy O(1), -> Less time complexity
            * unshift -> expensive task; O(n) -> High time complexity

*/

// Random uuid generate
randomUuid = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
    /[xy]/g,
    (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    }
  );
};

// Create students array
const students = [
  {
    id: "fa30d7de-7164-41c1-9274-6470da058458",
    name: "Jobayer",
    email: "jobayer@gmail.com",
  },
  {
    id: "cf3b822f-239d-4443-a923-6eef71821f2d",
    name: "Taima",
    email: "@gmail.com",
  },
  {
    id: "597d4662-4f91-4225-b65d-5bc09c95c0bc",
    name: "Jara",
    email: "jara@gmail.com",
  },
];

// ------------------------------------------------
// Create a new one ----> push vs. unshift
students.push({
  id: randomUuid(),
  name: "Jorina",
  email: "jorna@gmail.com",
});

// ------------------------------------------------
// Update
/*
    * find() -> not perfect for re-assignment -> O(n)
    * findIndex() -> perfect for res-assignment -> O(n) / O(1)


*/
const targetID = "597d4662-4f91-4225-b65d-5bc09c95c0bc";
const updatedData = {
  name: "Kala pakhi",
  email: "kala@gmil.com", // experiment by commenting & uncommenting
};

// reassign using find() -> O(n)
// let updatedObj = students.find((item) => item.id === targetID);
// updatedObj = {
//   id: targetID,
//   ...updatedData,
// };

// reassign using findIndex() -> O(1)
const updatedIndex = students.findIndex((item) => item.id === targetID);

students[updatedIndex] = {
  id: targetID,
  ...students[updatedIndex], // keep prev data
  ...updatedData, // push new data
};

console.log(students);
