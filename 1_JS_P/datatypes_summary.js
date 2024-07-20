// STACK (Primitive),   HEAP (Non-primitive)

//STACK
let mygithun = "Sagnik81599"

let anothername = mygithun
anothername = "4MBxFRAG"

console.log(mygithun)
console.log(anothername)


/// HEAP 
let Userone = {
    email: "Sagnik@gmail.com",
    upi: "user@ybl"
}

let Usertwo = Userone

Usertwo.email = "Sagnik@google.com"

console.log(Usertwo)
console.log(Userone)