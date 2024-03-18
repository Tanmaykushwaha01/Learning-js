// function sayMyName() {
//     console.log('T');
//     console.log('a');
//     console.log('n');
//     console.log('m');
//     console.log('a');
//     console.log('y');
// }

// sayMyName() // sayMyName is reference & () is execution

// in function when  we return the value then we can store in variable and print the store valued not only by console.log()
// if we dont do console.log then it will only return but dont print the output.


// function addTwoNum(number1, number2){
//     console.log(number1 +number2);       // 38 
// }
// console.log(addTwoNum(34, 4)); => undefined




function addTwoNumber(number1, number2) {      // (number1, number2) => parameters
    // sum = number1+number2
    // return sum      // code after return is dead code wont run   
    //           OR
    return number1 + number2

}
// console.log(addTwoNumber(3, 4));      // (3, 4) => argument
//            OR
// const result = addTwoNumber(4,4)
// console.log(result);


// function loginUser(username) {
//     if (username === undefined) {            // OR  (!undefined) // (username ="tanmay" => default value )
//         console.log('please enter the name sir.');
//         return
//     }
//     return `${username}, just logged in`
// }
// console.log(loginUser('tanmay'))
// console.log(loginUser()) // undefined not null



function calculateCartPrice(val1, val2, ...price) {   // rest operator used to many element by using single perameter
    //  the starting two value will print and the rest of value will stored in the price
    return price
}
console.log(calculateCartPrice(200, 100, 400, 500));


user = {
    name: 'tanmay kushwaha',
    price: 6000
}

function handleObject(anyObject) {
    return `the name is ${anyObject.name} and the price of course is rs ${anyObject.price}`
}// we must check the type safety of the objects we are giving in the parameter that key value  pair

// console.log(handleObject(user)); 
console.log(handleObject({
    name: 'tanmay',
    price: 4999
}));

const newArray = [100, 200, 300, 400, 500]
function handleArray(anyArray) {
    return newArray
}

// console.log(handleArray(newArray)); 
console.log(handleArray([100, 200, 300, 400, 50]));

