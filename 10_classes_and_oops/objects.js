function multiplyBy5(num){
    this.num = num;
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.email = email;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.