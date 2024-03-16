const marvel_heros = ['Ironman', 'Spiderman', 'Hulk',]
const dc_heros = ['Superman', 'Flash', 'Batman']

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);
// the push() function makes the changes in the original array but concat() creates a brand new array
// thats why we need to store concatinated array in new array.


// const allNewHeros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(allNewHeros);
//  It unpacks the elements of the passed arrays and creates a new array with the elements of both the passed arrays 
//It can concatenate or merge the objects and arrays.
// It can be used to pass the n array elements as n arguments to the function. thats why we use spread operator over concat

// const newArray = [1,2,3, [4,5,6], [7,8,[9,10]]]; 
// const flatedArray = newArray.flat(Infinity); //  flat creates a new array with all sub-array elements
// console.log(flatedArray);
// console.log(newArray); // no change

// const fname = 'tanmay'
// console.log(Array.isArray('tanmay')); // false
// console.log(Array.from(fname)); // [ 't', 'a', 'n', 'm', 'a', 'y' ]
// console.log(Array.from({ name: 'tanmay' })); //  => [] whenever unable to make the array

let str1 = 100;
let str2 = 200;
let str3 = 300;

console.log(Array.of(str1, str2, str3));


