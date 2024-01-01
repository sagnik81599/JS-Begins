let a = "5"
let b= +a

console.log(typeof b)
// ANS:- Number because '+' make type as number  
//there's something in JavaScript called type casting that give ability to,
//machine to convert number as string and deal with it as number


const ab = "Sagnik"
console.log(`Hello ${ab}`)
//Ans:- Hello Sagnik 
//add string value 

const num = [1,2,3,4]

for(let i=0;i<num.length;i++){
    if(i==2){
        continue;
    }
    console.log(num[i]);
}

//Arrays are 0 indexed. The continue skips the console log. When i = 2 (value 3), 
//it doesn't print. Final print: 1,2,4

let n = [2,3,4,5,6]

for(let j=0;j<n.length;j++){
    if(j==2){
        break;
    }
    console.log(n[j]);
}

//Ans:- 2,3 beecause index no.2 to upto index wiil be stop


