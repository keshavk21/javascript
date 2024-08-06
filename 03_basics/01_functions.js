function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("H");
}
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(10, 20);
// console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please provide a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,30,20,304));

const user ={
    username: "hitesh",
    price: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handelObject(user)

handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [ 200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}