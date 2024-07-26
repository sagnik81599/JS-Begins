//singleton
//onject.create


const mysyn = Symbol("Key1")

//object literals
const jsUser = {
    name: "SAGNIK",  //keys and values
    "full name": "Sagnik Saha",
    [mysyn]: "mykey1" ,      //symbol  important syntax
    age: 20,
    location: "Khargapur",
    email: "sagnik67@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Wendesday"]
} 

// console.log(jsUser.name)
// console.log(jsUser["name"])

// console.log(jsUser["full name"]);

// console.log(jsUser[mysyn]); //symbol print

// console.log(typeof mysyn); 


// how to changes  data 

jsUser.email = "Sagnik@google.com"
// console.log(jsUser);
// freze data no changes in data ,fixed data
Object.freeze(jsUser)
jsUser.age = "22" //no changes because data is fixed,freeze
// console.log(jsUser)



//fuction 
jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


