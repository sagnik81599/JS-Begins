

const tinderUser = new Object() //singleton object
const tinderUser2 = {}  //Non singleton object

tinderUser.id ="123abd"
tinderUser.name ="SAGGY"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
// console.log(tinderUser2)

const regularUser = {
    email: "saggy@gmail.com",
    fullname: {
        userfullname:{
            firstname: "sagnik",     //nested objects 
            lastname: "saha"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {...obj1,...obj2} //spred
const obj4 = Object.assign({},obj1,obj2)

// console.log(obj3);
// console.log(obj4);

 
const user = [
    {
        id: 1,
        email: "SAG@gamil.com"
    },
    {
        id: 2,
        email: "SAGGY@gamil.com"
    },
    {

    },
    {

    },
]

user[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //check user property is here in object or not , ans will boolen true or false





const course = {
    coursename: "javascript",
    price: "349",
    courseInstructor: "Sagnik"
}

// course.courseInstructor
// Destructuring
const {coursename: CName} = course

// console.log(coursename);
console.log(CName);


//json API

// {
//     "name": "Sagnik",
//     "Cname": "Javascript",
//     "price": free,

// }

//Array format api
// [
//     {},
//     {},
//     {}
// ]
