// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"
for(const char of greetings){
    // console.log(char);
}

// maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('fr',"France")


// console.log(map);

for (const [key,value] of map) {
    console.log(key,value);
}

const myObject = {
    "Gamne1" : 'NFS',
    "Game2" : 'GTA'
}

// for(const [key,value] of myObject){
//     console.log(key,value);
// }

