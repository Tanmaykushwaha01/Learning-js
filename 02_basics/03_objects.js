// Singleton Object
// object.create

// Lateral Object

const symb = Symbol('Key1');
const symbl = Symbol('Key2');

const JsUser = {
    name: 'tanmay',
    'full name': "tanmay kushwaha",
    age: 21,
    email: "user@gmail.com",
    isLoggedIn: true,
    lastLoginDay: ['Monday', 'Wednesday', 'Saturday'],
    symb: 'mykey1', // wrong way to assigning symbol
    [symbl]: 'mykey2',
};

// console.log(JsUser.email); // 1st way to call
// console.log(JsUser['email']);  // 2nd way to call
// console.log(JsUser.lastLoginDay);
// console.log(JsUser["full name"]); // the only way to call this type of key value pair

// console.log(JsUser.symb); // not working as symbol // not the right way
// console.log(typeof JsUser.symb); // string

// to make work as symbol we must change the key to [symbl] then it will work as symbol
// console.log(JsUser.symbl); // showing undefined
// console.log(JsUser[symbl]); 
// console.log(typeof JsUser[symbl]); // still showing string but it is the right way

// JsUser.email = 'tanmay@gmail.com'; // changing value of the key
// Object.freeze(JsUser);  // freeze() method is used to freeze an object
// JsUser.email = 'tanmay@google.com'; //Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties. 
console.log(JsUser);

JsUser.greeting = function () {
    console.log('this is the function inside the object');
}
JsUser.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting); // [Function (anonymous)] => function didnt executed only referance came