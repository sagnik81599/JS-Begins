let age=18;

if(age>=18){
    console.log("you are eligiable for vote");

}
else{
    console.log("you are not eligiable for vote");
}


//check if number is even or odd
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
if((num & 1 )==0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}


//leap year check
let year = Number(prompt("Enter year:"));

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// vowel or consonant check

let ch = prompt("Enter a character:");

if (
    ch == "a" || ch == "e" || ch == "i" ||
    ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" ||
    ch == "O" || ch == "U"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}