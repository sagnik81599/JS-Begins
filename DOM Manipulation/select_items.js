// html code 
//<h1 id="title">Hello</h1>
// <p class="text">Paragraph</p>

//first id select elements 

let title = document.getElementById("title");
console.log(title);
//second class select elements
let text = document.getElementsByClassName("text");
console.log(text);
//select selector only
let h1 = document.querySelector("#title");
console.log(h1);

let p = document.querySelector(".text");
console.log(p);

//next change text 
//<h1 id="title">Hello</h1>

let t = document.getElementById("title");
title.innerText="welcome";

