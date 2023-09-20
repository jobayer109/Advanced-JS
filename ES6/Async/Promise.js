/*
    Topics:
    -------
        A. What is promise?
        B. Simple promise.
        C. Better promise exploration.
        D. Fetch API call

    Notes:
    ------
        A. What is promise?
        --------------------

*/

//-------------------------------------------------------------------------->>

const Base_url = "https://jsonplaceholder.typicode.com";

// B. Simple promise____________
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Default value");
});
p1.then((value) => {
  //   console.log(value); // Output
}).catch((error) => {
  console.log(error);
});

//-------------------------------------------------------------------------->>

// C. Better promise exploration
function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isPassed ? resolve("You got the Iphone") : reject(new Error("You are failed"));
    }, 2000);
  });
}
getIphone(true)
  .then((result) => {
    // console.log(result);
  })
  .catch((e) => {
    console.log(e.message);
  });

//-------------------------------------------------------------------------->>

// D. Simple fetch API call and get single user
const res = fetch(`${Base_url}/users/1`)
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
