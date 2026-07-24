{/* <h2>Login</h2>

    <input type="password" id="password" placeholder="Enter Password">

    <button id="btn">Show</button>

    <script src="script.js"></script> */}


let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        btn.innerText = "Hide";
    } else {
        password.type = "password";
        btn.innerText = "Show";
    }

});