

//let score = "33abc";
//let score = null;

const { log } = require("console");

//let score= undefined
let score = "Aditya";

//console.log(typeof score); // a number.

let age = "Aditya";

//console.log(typeof age); // a string, not a number

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN not a number.
// true => 1, flase => 0.

let isLoggedIn = "aditya"
// let isLoggedIn ="" // false.

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false.
// "" => false.
// "aditya" => true.

let someNumber = 33

// the integer is converted into the string.

let stringNumber = String(someNumber)
console.log(typeof stringNumber);

let vlaue = 3;
let neg = -vlaue
console.log(neg);

/*
* Arithmetic operators: +,-,*,/
*/

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 3);


let str1 = "hello"
let str2 = "Aditya"

let str3 = str1 + str2;

console.log(str3);

//the abstract opertion ToPrimitive takes arguments inout and optional argument preferredType and returns either a normal completion containing an throw completion. It converts its input argument to a non object type if an object is capable of converting to more than one primitive type, it may use the optinal hint to favor that type.

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2);; // 122
console.log(1 + 2 + "2");//32 do not depend on this type of cases.
console.log(3 + 4 * 5 % 3);;

console.log(true);
console.log(+true); //1
console.log(-true); //-1
console.log(!true); //false
console.log(!false); // true


let gameCOunter = 100
gameCOunter++;
console.log(gameCOunter);