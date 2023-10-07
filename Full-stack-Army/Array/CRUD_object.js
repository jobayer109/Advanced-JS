/*
    Requirements:
    -------------
        - Create an object of 10 students
        - id
        - name
        - email

*/

/* 
    Advantage and disadvantage of using object
        - Easily Traverse
        - Filter
        - Get an object if I have the ID ----> O(1)
        - Delete ----> O(1)
        - Update ----> O(1)
        - Create a new one ----> O(1)
*/
// ----------------------------------------------------------
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

// -----------------------------------------------------------
// Create students array
const students = {
  "fa30d7de-7164-41c1-9274-6470da058458": {
    id: "fa30d7de-7164-41c1-9274-6470da058458",
    name: "Jobayer",
    email: "jobayer@gmail.com",
  },
  "cf3b822f-239d-4443-a923-6eef71821f2d": {
    id: "cf3b822f-239d-4443-a923-6eef71821f2d",
    name: "Taima",
    email: "taima@gmail.com",
  },
  "597d4662-4f91-4225-b65d-5bc09c95c0bc": {
    id: "597d4662-4f91-4225-b65d-5bc09c95c0bc",
    name: "Jara",
    email: "jara@gmail.com",
  },
};

// -----------------------------------------------------------------
// Create a new one ----> O(1)
const std = {
  id: randomUuid(),
  name: "Akib Ahmed",
  email: "akib@gmail.com",
};

students[std.id] = std; // Add student in the main object

// ------------------------------------------------------------------
// Update -> O(1)

const targetID = "cf3b822f-239d-4443-a923-6eef71821f2d";
const updatedStd = {
  name: "Tahmina",
  email: "tahmina@gmail.com",
};
students[targetID] = {
  ...students[targetID],
  ...updatedStd,
};

// ------------------------------------------------------------------
// Delete -> O(1)
// delete students["597d4662-4f91-4225-b65d-5bc09c95c0bc"];

// ------------------------------------------------------------------
// Get an object if I have the ID.
students["fa30d7de-7164-41c1-9274-6470da058458"]; // console it

// ------------------------------------------------------------------
// Object Traverse -> [find, filter, map, forEach etc as like array]
Object.values(students).forEach((student) => {
  const { id, name, email } = student;
  student; // Print all individual object
  id, name, email; // Print student's particular data
});

// ------------------------------------------------------------------
// Parent object print
console.log("Parent Object:", students);
