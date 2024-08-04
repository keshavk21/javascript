// # Primitive 


//  7 types: String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const ourtsideTemp = null
let userEmail;


const id  = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId) // false\

//const bigNumber = BigInt(12345678901234567890)

// Java Script is a dynamic type and loosely typed language, so you don't have to specify the data type of the variable when you declare it.

// # Reference(Non Primitive)

// 10 types: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Error

//const heroes = ["shaktiman", "superman", "batman"]
//{
//    name: "keshav",
//    age =21
//};
//
//const myFunction=function(){
//    console.log("Hello world");
//}
//
//console.log(typeof heroes) 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) vs Heap(Reference)

let myYoutubename = "keshavk.com"
let anothername = myYoutubename
anothername = "kkdean"

console.log(myYoutubename)
console.log(anothername)

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)