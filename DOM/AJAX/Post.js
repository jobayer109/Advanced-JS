const form = document.getElementById("post-form");
const posts = document.getElementById("posts");

const URL = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = this.title.value || undefined;
  const body = this.body.value || undefined;

  if (title && body) {
    const formObj = {
      userId: 111,
      title,
      body,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(formObj),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const listItem = listItemGenerator(data);
        posts.appendChild(listItem);

        this.reset();
      })
      .catch((e) => console.log(e.message));
  }
});

function listItemGenerator(item) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${item.id}. "${item.title}" is posted by userID: ${item.userId}`;

  return li;
}
