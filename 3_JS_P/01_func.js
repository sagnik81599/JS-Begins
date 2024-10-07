

function sayMyName(){ //parameters
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("N");
    console.log("I");
    console.log("K");
}

// sayMyName()  //when call func they called Argument

// function addTwoNumbers(num1,num2){
//      console.log(num1 + num2); 

// }

// addTwoNumbers(8,3) //Argument 
// addTwoNumbers(4,"9") //string convert



function addTwoNumbers(num1,num2){
    //  let result = num1 + num2
    //  return result
    return num1 + num2

}
const result = addTwoNumbers(3,5)

// console.log("result: ",result)



function loginUserMessage(username ){
    if(username === undefined){
       console.log("Please enter a username");
       return
    }
    return `${username} just logged in`
}




//  console.log(loginUserMessage("sagnik"))
//  console.log(loginUserMessage()) // (*) when Argumnet not pass then output show undefined


 function loginUserMessage2(username = "Saggy"){
    if(username === undefined){
       console.log("Please enter a username");
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage2());
// -----------------------------------------
