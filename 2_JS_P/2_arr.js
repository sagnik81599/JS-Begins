const marvel_heros = ['Thor','Ironman','Spiderman']
const DC_heroes = ['Superman','Flash','Batman']

// marvel_heros.push(DC_heroes)
// // console.log(marvel_heros)  //outpur array in array as data 

// marvel_heros.concat(DC_heroes)
// console.log(marvel_heros); same as push

const All_heros = marvel_heros.concat(DC_heroes)
// console.log(All_heros)

// easy method

const all_new_heros = [...marvel_heros,...DC_heroes]
// console.log(all_new_heros) //speard out 


const another_arr = [1,2,3, [4,5,6] ,7, [8,9, [4,6]]]

const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr); // all array in single marge array



console.log(Array.isArray("Sagnik")) // true or false 
console.log(Array.from("Sagnik")) //convert in array

console.log(Array.from({name: "Sagnik"})) //interesting output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //same marge score 