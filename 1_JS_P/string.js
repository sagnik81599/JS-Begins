let name = "Sagnik"
let repocount = 50

// console.log(name + repocount + " Values")

//new format
console.log(`Hello my name is ${name} and my repo is ${repocount}`)

const gamename = new String('4MBxFRAG')

console.log(gamename)
console.log(gamename[0]) // which postion string define
console.log(gamename.toUpperCase()) // all string should be capital letter 
console.log(gamename.toLocaleLowerCase()) //lower all string define
console.log(gamename.length)
console.log(gamename.charAt(4)) // no of index in  string character serach
console.log(gamename.indexOf('x')) // Index position no. 


const newstring = gamename.substring(0,4)
console.log(newstring)

const anotherstring = gamename.slice(-4,-1)
console.log(anotherstring)

const newStringOne = "  SAGNIK  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sagnik.com/frag%09saha"

console.log(url.replace("%","-"))

console.log(url.includes("saha"))
console.log(url.includes("vasa"))
console.log(gamename.split('-'))

