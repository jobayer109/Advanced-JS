/*
    Topics:
    --------
        1. Selectors
            * getElementById
            * getElementsByClassName
            * getElementsByTagName
            * getElementsByName

*/
//----------------------------------------------------------------->>
// Get element Selectors
const title = document.getElementById("repeat");
const classes = document.getElementsByClassName("text");
const tagNames = document.getElementsByTagName("li");
const nameOne = document.getElementsByName("list_one");

//----------------------------------------------------------------->>

// Query Selectors
const title1 = document.querySelector("#repeat");
const classes1 = document.querySelectorAll(".text");
const tags = document.querySelectorAll("li");
const name = document.querySelector("[name='list_one']");
