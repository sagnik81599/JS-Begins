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

let title = document.getElementById("title");
title.innerText="welcome";



{/* <h1 id ="title">hello</h1> */}


let title = document.getElementById("title");
title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "40px";


<button id="sumbit">sumbit</button>

let btn = document.getElementById("sumbit");
btn.addEventListener("click", function(){
    documnet.getElementById("msg").innertext="button clicked";
})


{/* <div id="container"></div> */}

let p = document.createElement("p");

p.innerText = "Hello DOM";

document.getElementById("container").appendChild(p);





