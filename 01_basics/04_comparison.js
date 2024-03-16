// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log( "2" > 1);
// console.log( "02" > 1);
//unpredictable result => make sure to use same dataype for predictable result 
// thats why we use typescript. typescript dont allow to compare 2 different dataype

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// == equity check and > < <= >= comparsion work differently 
// comparsion convert null to number, treating as 0
// thats why  null >= 0 true and null > 0 is false.


// === check value and datatype
console.log("21" === 2);


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0);  //false
