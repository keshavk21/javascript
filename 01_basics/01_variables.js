const accountId = 144553
let accountEmail = "keshav@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState
/*
Prefer not to use 
because of issue in block scope and functional scope
*/
// accountId = 2 //not allowed

accountEmail = "kkdean@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])