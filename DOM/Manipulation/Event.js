/*
  Topics:
  --------------  
    A. Click event
    B. Mouse hover event
    C. 
    D. 


  Notes:
  ---------------
    A. Click event:
    ----------------------
        *
    B. Mouse hover event:
    ----------------------
        *


*/

//------------------------------------------------------------------->>

// A. Click event_____________
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function (e) {
  const lastChild = list.lastElementChild.cloneNode(true);
  lastChild.innerHTML = "Newly added";
  list.appendChild(lastChild);
});
