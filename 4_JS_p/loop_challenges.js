//while loop that calculates the sum of all 
//numbers from 1 to 5 and stores the result in a variable named `sum`.

let sum=0;
let i=0;
while(i<=5){
    sum+=i;
    i++;
}
console.log(sum);

//Write a while loop that counts down from 5 to 1 and 
//stores the result in a variable named `countdown`.

let countdown =[];
let j=5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 10);


// loop main is used i) iterator ii) iteration


//infinte loop

// let x =0 ;
// while(true){
//     console.log(x);
//     x+=2;
// }


let number = 219379834091842487981274129701256953724830;
let count = 0;
while(number>0){
    number = Math.floor(number/10);
    count++;
 
}

console.log("total numbers are :"+count);

//also same for loop

// for(;number>0;count++){
//     number = Math.floor(number/10);
// }
// console.log(count);

