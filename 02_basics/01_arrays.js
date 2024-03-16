// () => parentheses
// [] => brackets or square brackets
// {} => braces

// - Array -  
// arrays are resizable and can contain a mix of different data types
// arrays are zero-indexed
// array elements cannot be accessed using arbitrary strings as indexes
// avaScript array-copy operations create shallow copies (same reference point) opposite of deep copies


const myArr = ['tanmay', 'vaibhav', "vartika", 'ashutosh', 'anita']
// console.log(myArr[3]);

//- Array method -
// myArr.push('1');   // add at last 
// myArr.pop()   // remove from back

// myArr.unshift(0);    // add element in starting
// myArr.shift(0);
// myArr.shift('tanmay');    // delete element from starting
// console.log(myArr);

// console.log(myArr.includes('tanmay'));    // true => boolean
// console.log(myArr.indexOf('vaibhav')); 

// const newArr = myArr.join();
// console.log(newArr);   // concatenating all of the elements in this array, separated by commas
// console.log(typeof newArr);   // convert in string


//- slice and splice -
console.log('A', myArr);
const Arr1 = myArr.slice(0,3);
console.log(Arr1);  // not changing the original array 
//  creates a new array with a portion of elements copied from the original array,
console.log('B', myArr);

const Arr2 = myArr.splice(0,3);
console.log(Arr2);  // changing the original array
console.log('c', myArr);





