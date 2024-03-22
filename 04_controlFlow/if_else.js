// if 
// <, >, <=, >=, ==, !=, ===, !==

const isLoggedIn = true

// if(isLoggedIn){
//     console.log('Executed');
// }



// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);   // cant access power because power is out of scope of "if" scope



// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// it will run but not the right way to write code




// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {   
    console.log("Allow to buy course");
}
 // && => check userLoggedIn and debitCard if both are true then it will run



if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} 
//  || => check loggedInFromGoogle or loggedInFromEmail any of the condition is true 
// if only one condition is true still run the code

    