// var a = 30 // var has global scope
// // value can reassign from anyhwere cam can acees and update value outside the block


// if (true) {
//     var a = 300
//     let b = 200  // let has block scope & value stored only inside the block or rhis scope same 
//     const c = 100
// }

// console.log(a);
// console.log(b); // wont run because there is no global let
// console.log(c); // wont run because there is no global const


// -------------------------------------------------------------------------------------------------------------

function one() {
    let username = 'tanmay'
    function two() { //this function can use acces variable  global variable or variable outside the this function
        let website = 'github'
        console.log(website); 
    }
    // console.log(website);// this line wont run because website variable can accessed in that function two(){} block
    two()
}
one();
//real life example => small child can take ice cream from elder but elder cant take ice cream from children 
// in the same way child function can access global variable or parent function variable cant access variabke because the value only stored in that block 

if(true){
    const name = 'tanmay'
    if(name === "tanmay"){
       const  website = ' youtube'
        console.log( name + website); 
    }
    // console.log(website); // wont run because website variable has bloc scope and cant accessed outside that
}

//variable cant be accessed outside the its scope in nested function called closure. like above.
//Global variables can be made local (private) with closures.
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function


// ---------------------------------------------- INTERESTING ----------------------------------------------



addOne(5)

function addOne(num){
    return num + 1
}



addTwo(5) //  ReferenceError: Cannot access 'addTwo' before initialization.

const addTwo = function(num){
    return num +2
}
// wont run because we not only declared the function but alse stored in a variable. (hoisting)
