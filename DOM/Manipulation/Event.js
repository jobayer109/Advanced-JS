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

//------------------------------------------------------------------->>

// B. Mouse hover event___________
const box = document.getElementById("box");

box.addEventListener("mousemove", function (e) {
  // Global scaling
  // document.getElementById("x-value").innerHTML = e.clientX;
  // document.getElementById("y-value").innerHTML = e.clientY;

  // Exact scaling of the particular box area.
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;

  //
  // document.getElementById("x-value").innerHTML = e.pageX;
  // document.getElementById("y-value").innerHTML = e.pageY;
});

//------------------------------------------------------------------->>
