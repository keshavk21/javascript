// singleton

// Object literals
// Object.create

const mySym = Symbol("key1")




const Jsuser = {
    name: 'Keshav',
    "Full name": "Keshav Khandelwal",
    [mySym]: "mykey1",
    age: 30,
    location : "Jaipur",
    email: "keshav2004@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
};
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser"Full name"); // error
// console.log(typeof Jsuser[mySym]);

Jsuser.email = 'keshav22@gmail.com'
// Object.freeze(Jsuser);
Jsuser.email = 'keshav22@amazon.com'
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

Jsuser.greeting2 = function(){
    console.log("Hello jsuser");
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

