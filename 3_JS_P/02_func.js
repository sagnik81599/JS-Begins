//  func Expression

// const { useDeferredValue } = require("react");

// const greet = function(){
//     console.log("hello");
// }


//arrow func
const greet = () =>{
  console.log("hello");
}

//multi parameter func
const sum=(a,b)=>{
    return a+b; // sends something outer 
}


// // default parameters function
const sum=(a=20,b=30)=>{
    return a+b; 
}
console.log(sum());

//callback function
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Sagnik");
}

// processUser(greet);

function sum(a,b){
    return a+b;
}
    function sumall(a,b,sum){
        return sum(a,b)
    }


console.log(sumall(2,5,sum));