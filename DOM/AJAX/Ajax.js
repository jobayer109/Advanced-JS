const button = document.getElementById("button");
const post__list = document.getElementById("postList");

const URL = "https://jsonplaceholder.typicode.com/posts";

button.addEventListener("click", async function (e) {
  const res = await fetch(URL);
  const posts = await res.json();

  posts.forEach((post, index) => {
    const liItems = makeList(post, index + 1);
    post__list.appendChild(liItems);
    button.classList.add("disabled"); // after fetching button disabled.
  });
});

function makeList(item, index) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${index}. ${item.title}`;
  return li;
}
