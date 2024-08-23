const promisOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
})

promisOne.then(function(){
    console.log("Promised consumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promised consumed 2");
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh",password: "1234"})
        }else{
            reject("Failed to fetch data")
        }   
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> {
    console.log("Promise completed")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh",password: "1234"})
        }else{
            reject("ERROR: Failed to fetch data")
        }   
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/keshavk21")
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);    
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/keshavk21")
.then(response => response.json())
.then((data)=> console.log(data))
.catch((error) => console.log(error)) 