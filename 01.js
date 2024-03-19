// const means => once declared can't be changed.
// var means => can get update in future.


const accountId = 12341;
const accountEmail = "aditya@google.com";
const accountPassword = "1234";
accountCity = "Gwalior"; // not the correct way.


let accountState; // undefined

// accountId = 2; // the value cant be changed because const se aap kuch bhi change nhi kar sakte hai value ko 

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);


// After updating => 

console.table([accountEmail,accountId,accountPassword, accountCity,accountState])

// Prefer not to use var because of issue in block scope and functional scope.




