/*
  Topics:
  --------------  
    A. Click event
    B. Mouse hover event
    C. Remove a list from the list-group (Delegation problem)
    D. Event Delegation problem solution.
    E. Input form handle with Event handler.
    F. Input data store in an Array.
    G. Check box handling and store data in an array.


  Notes:
  ------------------------
    A. Click event:
    ----------------------
        *
    B. Mouse hover event:
    ----------------------
        *
*/

//------------------------------------------------------------------->>

// A. Click event_____________
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function (e) {
  const lastChild = list.lastElementChild.cloneNode(true);
  lastChild.innerHTML = "Newly added";
  list.appendChild(lastChild);

  // if (this.contains === false) {
  //   list.innerHTML = "Empty";
  // }
});

//------------------------------------------------------------------->>

// B. Mouse hover event___________
const box = document.getElementById("box");

box.addEventListener("mousemove", function (e) {
  // Global scaling
  // document.getElementById("x-value").innerHTML = e.clientX;
  // document.getElementById("y-value").innerHTML = e.clientY;

  // Exact scaling of the particular box area.
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;

  //
  // document.getElementById("x-value").innerHTML = e.pageX;
  // document.getElementById("y-value").innerHTML = e.pageY;
});

//------------------------------------------------------------------->>

// C. Remove a list from the list-group (Delegation problem)
// Delegation problem (I this way we can only delete that element are previously added in the HTML document. But, we can't the list that we newly added to the list. This is 'Event Delegation problem')

// [...list.children].forEach((li) => {
//   li.onclick = function (e) {
//     e.target.remove();
//   };
// });

// --------------------------<<

// D. Event Delegation problem solution___________________

list.addEventListener("click", function (e) {
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

//------------------------------------------------------------------->>

// E. Input form handle with Event handler.
const name = document.getElementById("name");

name.addEventListener("keypress", function (e) {
  let values = []; // Have to explore
  if (e.key === "Enter") {
    document.getElementById("nameShow").innerHTML = e.target.value;
    e.target.value = "";
  }
});

//------------------------------------------------------------------->>

// F. Input data store in an Array.
let formArray = [];
function addToArray() {
  const nameInput = document.querySelector('input[name="name"]');
  const nameValue = nameInput.value;
  console.log(nameValue);

  const valueObj = { nameValue };

  formArray.push(valueObj);
  console.log(formArray);
}
// addToArray();

//------------------------------------------------------------------->>

// G. Check box handle and store data in an array.
const skills = document.getElementsByName("skills");
const result = document.getElementById("result");

const skillsArray = [];
[...skills].forEach((skill) => {
  skill.addEventListener("change", function (e) {
    if (e.target.checked) {
      skillsArray.push(e.target.value);
      appendSkills(result, skillsArray);
    } else {
      let index = skillsArray.indexOf(e.target.value);
      skillsArray.splice(index, 1);
      appendSkills(result, skillsArray);
    }
  });
});

function appendSkills(parent, skills) {
  let result = "";
  skills.forEach((skill) => {
    result += ` ${skill}, `;
  });
  parent.innerHTML = result;
}

// Re-practice the previous code actions

// let array = [];
// [...skills].forEach((skill) => {
//   skill.addEventListener("change", function (e) {
//     if (e.target.checked) {
//       array.push(e.target.value);
//       setSkills(result, array);
//     } else {
//       let index = array.indexOf(e.target.value);
//       array.splice(index, 1);
//       setSkills(result, array);
//     }
//   });
// });

// function setSkills(parent, skills) {
//   let result = "";
//   skills.forEach((skill) => {
//     result += ` ${skill}, `;
//     parent.innerHTML = result;
//   });
// }
