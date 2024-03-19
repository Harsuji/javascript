// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 < 1);


// these type of conversion are not predictable. so, it's better to avoid them if possible.
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false cause empty value
console.log(null == 0);// false
console.log(null >= 0); // true value conversion error. null is considered as zero in comparison with other values because null is a special data type in JS.

console.log(undefined == 0); // false always.

/* 

  The reason is that an equality check == and comparisons < ,> , >= ,<= work differently. Comparisons convert null to a number treating it as 0. That's why (3) null > =0 is true and (1) null > 0 is false.

*/

// Strict check => is nothing just a === check.

console.log("2" == 2); //convesion
console.log("2" === 2); //will check the datatype and not convert it.