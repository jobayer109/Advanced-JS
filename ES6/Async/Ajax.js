function loadData() {
  const xtr = new XMLHttpRequest();

  xtr.onload = () => {
    const result = xtr.responseText;
    // result.forEach((r) => console.log(r));
    const parsed = JSON.parse(result);
    const response = parsed.forEach((r) => console.log(r.username));
  };
  xtr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xtr.send();
}

loadData();
