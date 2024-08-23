// const user = {
//     username:"Keshav",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        
        
//     }
// }

// console.log(user);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this;
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("Keshav",8,false)
console.log(userOne);