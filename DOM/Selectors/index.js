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
           
        3. DOM Traverse (Simple way)

        4. DOM Traverse (Smart way)
            Bcz, 'HTML Collection' is a array like data structure. So we can 
            convert this to real Array...
            
            1. Array.from(collection)
            2. Array.prototype.slice.apply(collection)
            3. [...collection] -> ES6 standard
            
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
list.inn;

//----------------------------------------------------------------->>

//  4. DOM Traverse (Smart way)
const newList = document.getElementsByTagName("li");

// Convert the array like data structure to Real Array.

// 4.1: Array.from(collection)_________________________________
const listItems1 = Array.from(newList);

// 4.2: Array.prototype.slice.apply(collection)________________
const listItems2 = Array.prototype.slice.apply(newList);

// 4.3: [...collection]_________________________________________
const listItems3 = [...newList]; // ES6 standard & should use it.

listItems1.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});

//----------------------------------------------------------------->>
