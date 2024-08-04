// array

const myArr = [0,1,2,3,4,5,true,'hitsh'] // array of mixed data types
const myHeros = ["Shaktiman","naagraj"]
// console.log(myArr[0]) 


//Array methods

// myArr.push(6);
// console.log(myArr) 
// myArr.pop();

// myArr.unshift(6);
// myArr.shift();

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(2))

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice,splice
console.log("A",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr);
