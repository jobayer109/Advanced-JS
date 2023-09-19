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

const xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.response);
    response.forEach((res) => console.log(res.username));
  }
};

xhr.send();

//-------------------------------------------------------------------------->>
