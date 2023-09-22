// Create Element Function
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
const ul = document.getElementById("lists");
ul.appendChild(li);

// Create a new 'div' in the container section.
const p1 = createElement(
  "p",
  "lead",
  "Lorem ipsum ga rerum magnam repellat nesciunt quos sit! Iusto, impedit vitae, illum voluptatem consequuntur voluptas incidunt reiciendis, et sint officia nam?"
);

const p2 = createElement(
  "p",
  "lead",
  "Lorem ipsum ga rerum magnam repellat nesciunt quos sit! Iusto, impedit vitae, illum voluptatem consequuntur voluptas incidunt reiciendis, et sint officia nam?"
);

// Create 'div' and append to the container section.
const div = createElement("div");
append(div, [p1, p2]);
console.log(div);
document.getElementsByClassName("container")[0].appendChild(div);
