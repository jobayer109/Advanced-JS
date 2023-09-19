/*
    Topics:
    -------
        A. Simple AJAX
        B. AJAX with callback function.(Bad & Good practice)









*/

//-------------------------------------------------------------------------->>

// A. Simple AJAX

function loadData() {
  const xtr = new XMLHttpRequest();

  xtr.onload = () => {
    const result = xtr.responseText;
    // result.forEach((r) => console.log(r));
    const parsed = JSON.parse(result);
    const response = parsed.forEach((r) => r.username);
  };
  xtr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xtr.send();
}

// loadData();

//-------------------------------------------------------------------------->>

// B. AJAX with callback function (Bad practice)

const xHttpReq = new XMLHttpRequest();
xHttpReq.open("get", "https://jsonplaceholder.typicode.com/users");

xHttpReq.onreadystatechange = function (e) {
  if (xHttpReq.readyState === 4 && xHttpReq.status === 200) {
    const response = JSON.parse(xHttpReq.response);
    response.forEach((res) => console.log(res.username));
  }
};

// xHttpReq.send();

//-------------------------------------------------------------------------->>

// B. AJAX with callback function (Good practice)

const getRequest = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      callback(null, response);
    } else {
      callback(xhr.status, null);
    }
  };
  xhr.send();
};

// Get users.
getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // res.forEach((r) => console.log(r.username));
  }
});

// Get posts.
getRequest("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // res.forEach((r) => console.log(r.title));
  }
});
