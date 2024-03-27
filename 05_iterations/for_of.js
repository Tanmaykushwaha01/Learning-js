// for of
// Array specific loop 
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
// Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set,
// NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.


// ["", "", ""]
// [{}, {}, {}]

//for (const iterator of object) {}      // here object means 
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
//Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)


// myArr = [1,2,3,4,5,6,7,8,9]
// for (const index of myArr) { 
//     console.log(index);
// }

let greeting = 'hello world'
for (const greet of greeting) {
    // console.log(`print iterably each word of greeting ${greet}`);
}

// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// A key in the Map may only occur once; it is unique in the Map's collection.

const myMap = new Map();
myMap.set('name', 'tanmay')
myMap.set('age', 21)
myMap.set('course', 'javascript')
myMap.set('course', 'javascript')

// console.log(myMap);
// console.log(myMap.get('age')); // 21

// for (const key of myMap) { 
//     //  console.log(key, value); 
//  }

for (const [key, value] of myMap) {    //   [key, value] => destructure of array
   //  console.log(key, value);  // only unqiuely identified map
}

const myObj = {
    'game1' : 'PUBG',
    'game2' : 'FreeFire',
    'game3' : 'NFS',
}

// for (const [key, value] of myObj) {
//     console.log(key, value);
// }
//wont working  => TypeError: myObj is not iterable