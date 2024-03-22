// ----------------------------- this keyword -----------------------------------

// in objects
const user = {
    username: 'tanmay',
    age : 21,
    welcomeMsg : function (){
        console.log(`${this.username} , welcome to the site & your age is ${this.age}`);
        console.log(this);   // { username: 'tanmay', age: 21, welcomeMsg: [Function: welcomeMsg] }
    }
}
// user.welcomeMsg();
// user.username = "sam"
// user.welcomeMsg()


// this keyword is used to tell the context. context in very simple value in that scope

// console.log(this); // {}

// where as if run  this keyword in browser then it will show window object 
// or basically window global context because thats why can capture alot of window event like click, form submit

// in functions
function chai(){
    username: 'tanmay'
    console.log(this);  // global context 
    console.log(this.username);  // undefined
}
// chai()

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);  // undefined
    console.log(this);  // global context 
}
// chai2()

const chai3 =  () => {
    let username = "hitesh"
    console.log(this);  //    {}
    console.log(this.username);   // undefined
}
// chai3()


// --------------------------------- Arrow Function -----------------------------------

const addTwo = (num1, num2) => {
    return num1 + num2
} // explicit return

// const addTwo = (num1, num2) => return num1 + num2       // implicit return 

// const addTwo = (num1, num2) ( return num1 + num2)  
// we can cover this using parenthesis

const printObject = () => ({ username: 'tanmay kushwaha' })
//for object curly bracket must be cover by parenthesis



const myArr = [100, 200, 300, 400, 500]
// myArr.forEach( function () {})
// myArr.forEach( () => () )
// myArr.forEach(  () => {})


