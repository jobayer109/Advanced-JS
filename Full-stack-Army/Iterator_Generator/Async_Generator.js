const axios = require("axios").default;

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);
  return users;
}

async function* getPostByUser(users) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
    yield posts;
  }
}

getUsers()
  .then(async (users) => {
    const userIterator = getPostByUser(users);
    (await userIterator.next()).value; // userId: 1
    (await userIterator.next()).value; // userId: 2
    (await userIterator.next()).value; // userId: 3
  })
  .catch((e) => {
    console.log(e);
  });
