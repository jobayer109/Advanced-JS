/*
    Topics:
    --------------  
      A. Form data store in an object
*/

//------------------------------------------------------------------->>

// A. Get Form data and store in an object.

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = {};
  [...this.elements].forEach((el) => {
    if (el.type !== "submit" && el.value !== "") {
      formData[el.name] = el.value;
    }
  });
  this.reset();
  console.log(formData);
});
