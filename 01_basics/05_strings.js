const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// console.log ("Hello my name is  ${name} and my repo count is ${repoCount}"); // This is called template string

const gameName = new String("Keshav-kh-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__)
// 
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6,4)
// console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne.trim());

const url = "https://keshav.com/keshav%20khandelwal"

console.log(url.replace("%20", "-"))

console.log(url.includes('keshav'))

console.log(gameName.split("-"));