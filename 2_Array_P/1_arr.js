//ARRAY 
// many way to declare array

const arr = [10,20,30]
const arr2 = ["Sagnik","Suhrid"]

const myarr = new Array(1,2,3,4,5)

// console.log(arr[2])

//Array Methods

myarr.push(6) //insert value in array in last index
myarr.push(7)
myarr.pop() // delete value in array last index
// console.log(myarr)

myarr.unshift(8)
// console.log(myarr)
myarr.shift()
// console.log(myarr)


// console.log(myarr.includes(9))
// console.log(myarr.indexOf(5))

const newarr =  myarr.join() //array convert in the string 

// console.log(myarr)
// console.log(newarr) //string format show
// console.log(typeof newarr)

// slice, splice very important

const myn = myarr.slice(1,3)

// console.log("A",myarr)
// console.log(myn)

const myn2 = myarr.splice(1,3)

// console.log("B",myarr);
// console.log(myn2)