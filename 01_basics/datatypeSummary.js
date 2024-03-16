//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // not equal

const bigNumber = 3456543576654356754n

//  type of null is object

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
} // tyoe of => function object

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ------------------------------------------- Memory -------------------------------------------

// Stack(Primitive)  & Heap(Non Primitive)

// Stack(Primitive)
let myName = 'tanmay'
let fullName = myName

fullName = 'tanmay kushwaha'

console.log(myName);
console.log(fullName);



// Heap(Non Primitive)
let user1 = {
    name: 'tanmay',
    age: 21,
    email: " user@gmail.com",

}
let user2 = user1;

user2.email = "tanmay@gmail.com";

console.log(user1.email);
console.log(user2.email);