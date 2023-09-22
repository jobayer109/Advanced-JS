/*
  Topics:
  --------------  
    A. Create Element
    B. Update Element
    C. Remove Element
    D. Clone a Node (cloneNode)
*/

//------------------------------------------------------------------->>

//  A. Create Element
function createElement(tagName, className, innerHTML) {
  const tag = document.createElement(tagName);
  tag.innerHTML = innerHTML || "";
  tag.className = className || "";

  return tag;
}

// Append function
function append(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

// Create a new list of ul list.
const li = createElement("li", "list-group-item", "Line four");

// const ul = document.getElementById("lists");
// ul.appendChild(li);

const list = document.getElementById("lists");
append(list, [li]);

//------------------------------------------------------------------->>

// B. Update Element
const firstChildOfList = list.firstElementChild;

setTimeout(() => {
  firstChildOfList.innerHTML = firstChildOfList.innerHTML + " " + "(modified)";
  // We can change color, attributes and many others
}, 3000);

//------------------------------------------------------------------->>

// C. Remove Element
const lastChildOfList = list.lastElementChild;

// setTimeout(() => {
//   lastChildOfList.remove();
// }, 2000);

//------------------------------------------------------------------->>

// D. Deep Clone a Node with (cloneNode) method
const lastChild = list.lastElementChild.cloneNode(true);
lastChild.innerHTML = "Line Five";
list.appendChild(lastChild);

// console.log(lastChild);
