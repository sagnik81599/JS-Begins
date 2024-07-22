const currentdate = new Date() //object
console.log(currentdate)

//methods
console.log(currentdate.toString())
console.log(currentdate.toDateString())
console.log(currentdate.toLocaleString())
console.log(typeof currentdate) //Oject

let mydate = new Date(2024,0,14) // this means yy,mm,dd. here js starting month is 0 
console.log(mydate.toDateString())

let mydate2 = new Date(2024,0,14,5,3)
console.log(mydate2.toLocaleString())


let mydatestamp =  Date.now()

console.log(mydatestamp)
console.log(mydate.getTime())

console.log(Math.floor(Date.now() / 1000))

let mydate3 = new Date()
console.log(mydate3.getDay())
console.log(mydate3.getMonth())


// mydate3.toLocaleString('default',{
//     weekday:"long"
// })                                     // you customize date and times