// age = "21"
// console.log(typeof age);

let age = 20
console.log(typeof age);

age = "21abc"
let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abs" => NaN   => js dont have strict check thats why people use typescript    
// true = 1; false = 0

let isLoggedIn = 1;
let isLoggedIntoBoolean = Boolean(isLoggedIn);
console.log(typeof isLoggedIntoBoolean);
console.log(isLoggedIntoBoolean);
// 1 or greater number => true; 0 => false; 'name' => true; "" => false;

let someNumber = 21
let stringNumber = Number(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
//21 => "21";

let nullVal =null;
let nullIntoNumber = Number(nullVal);
console.log(typeof nullIntoNumber);
console.log(nullIntoNumber);
// null => 0  like if weather app didnt send null data due to issue then it will show 0. be aware

