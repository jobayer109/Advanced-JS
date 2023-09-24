const form = document.getElementById("post-form");
const post = document.getElementById("post");

const URL = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = this.title.value;
  const body = this.body.value;

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
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  }
});
