//WHENEVER WANT TO PUT LOOP ON OBJECT USE FOT IN LOOP

let myObj = {
    js : 'javascript',
    Cpp : 'C++',
    py : 'python',
    rb : 'ruby',
}

// for (const key in myObj) {
//     console.log(key);  // => only key will print
// }

// for (const key in myObj) {
//     console.log(myObj[key]);  // => only value will print
// }


// for (const value in myObj) {
//     console.log(`${value} is the shortcut for ${myObj[value]}`);
// }

let programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) {
//     // console.log(key);     //  only key will print => [ '0' ] [ '1' ]  [ '2' ] [ '3' ] [ '4' ]
// }

for (const key in programming) {
    console.log(programming[key]); // only value will print
}


//WHENEVER WANT TO PUT LOOP ON MAP USE FOR OF LOOP

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }   // wont run => they are not iterable using this way

// for (const [key] in map) {
//     console.log(`${key}`);
//  }   wont run   => they are not iterable using this way


