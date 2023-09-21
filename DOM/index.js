/*
    Topics:
    --------
        1. Selectors
            * getElementById
            * getElementsByClassName
            * getElementsByTagName
            * getElementsByName
            * querySelector_____________(important) 
            * querySelectorAll__________(important) 

        2. Difference between "getElementBySomething" and "querySelector"
            * getElementBySomething shows the 'HTMLCollection' / Element node.
            * querySelector shows the 'NodeList'. Kinds of nodes can be anything 
              like "Elements, TagNames, Text, Attributes, names etc"
            * querySelector is more powerful than getElementBySomething 
           
        3. DOM Traverse.
            * Simple way
            * Smart way (Loop)
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

//----------------------------------------------------------------->>

// Difference between "getElementBySomething" and "querySelector"

const li1 = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");

// Simply console.log() output_________
li1; // HTMLCollection(3)
li2; // NodeList(3)

// Check constructor___________________
li1.constructor.name; // HTMLCollection
li2.constructor.name; // NodeList

// Check "ul" tag matters (children vs childNodes)
const ul = document.querySelector("ul");
ul.children; // HTMLCollection(3)
ul.childNodes; // NodeList(7)

//----------------------------------------------------------------->>

// 3. DOM Traverse_________( Simple way)
const list = document.getElementById("list");
list.parentElement; // section.container
list.children; // HTMLCollection(3)
list.firstElementChild; // list_one
list.lastElementChild; // list_three
