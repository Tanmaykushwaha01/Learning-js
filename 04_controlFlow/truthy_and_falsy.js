const email = 'tanmay@google.com'
if (email) {
    console.log(`got the email ${email}`);
}

// Values that are considered or coerced into true are called truthy
//  and values that are considered or coerced into false are called falsy.


// falsy values

// 0, -0, BigInt 0n, null, undefined, "",  NaN, false


// truthy values
// {}, [], ' ', function () {}, 'false', '0'

// how to check array?

const arrayCheck = []

if (arrayCheck.length === 0) {
console.log('array is empty');
}


// how to check object?
let objectCheck = {}

if (Object.keys(objectCheck).length === 0) {
    console.log('object is empty');
}

false == 0 //true
false == ''// true
0 =='' // true


// ---------------------- Nullish Coalescing Operator--------------------------

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
//when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// Nullish Coalescing Operator (??): null undefined
let val;
// val = 5 ?? 7
val = null ?? 7
val = undefined ?? 7
console.log(val);


let val1;
val1 = null ?? 10 ?? 20



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")