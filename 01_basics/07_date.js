// we calculate date from  January 1, 1970, and its shows in milliseconds

// let date = new Date();
// console.log(date);
// console.log(typeof date); // object
// console.log(date.toString()); // Sat Mar 16 2024 10:31:08 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); //Sat Mar 16 2024
// console.log(date.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})); // 3/16/2024, 4:11:31 PM
// console.log(date.toISOString()); //2024-03-16T10:31:29.405Z
// console.log(date.toJSON()); // 2024-03-16T10:32:44.054Z
// console.log(date.toLocaleDateString()); // 3/16/2024
// console.log(date.toLocaleTimeString()); // 10:34:05 AM
// console.log(date.toTimeString()); // 10:36:08 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2023, 0, 16); // month start from 0
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 16, 4, 25); 
// console.log(myCreatedDate.toString());

let myCreatedDate = new Date("2023-01-24"); // month start from 01  
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now(); // dont use new & it tell date in millisecond from 1 jan 1970
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); // give me value in millisecond from 1jan 1970 to the given date
console.log(Math.floor(myCreatedDate) / 1000 ); // millisecond to second

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());  // month start from 0
console.log(newDate.getDay());



