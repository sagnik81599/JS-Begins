

const array = [10,23,45,67,89,90];
array.forEach((digit,index)=>{
   console.log(`Index: ${index}, Value: ${digit}`);
})



// array.find((value)=>{
    array.find((ele)=>{
    console.log(ele>35);
    
})

 const pass=  array.find((ele)=>{
    // console.log(ele>35);
    return ele>35;
    
})
console.log("First value greater than 35 is:",pass);



const filteredArray = array.filter((ele)=>{
    return ele>35;
})
console.log("Values greater than 35 are:",filteredArray);




array.map((element)=>{
    console.log(element*2);
})

//fetching data from API
const dates = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    data.map((user)=>{  //we using map function to array convert to object
        console.log("User Details:",user.name);
    });
});

// .then(res => res.json())
// .then(data => {
//     data.forEach((user) => {
//         console.log(user);
//     });
// });


const arr1 = [10, 20, 30, 40, 50];

const value = arr1.reduce((accumulator, sum) => {
    return accumulator + sum;
}, 0);

console.log("Sum of array values is:", value);


const arr3 = [10, 20, 30, 40, 50];
const value1 = arr3.flatMap((ele)=>{
    return ele*2;
})
console.log("FlatMap values are:",value1);


const name = ["Sagnik", "Rohit", "Ankit", "Ramesh"];
name.some((ele)=>{
    console.log(ele=="Rohit");
})