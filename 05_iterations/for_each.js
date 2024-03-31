// for each take callback function, in simple words take function & arrow function which have no name
// in for each method, it is smart enough that it will go to each value so we can give any name to tha value in paramemeter of for each

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printCoding(values) {
//   console.log(values);
// }
// coding.forEach(printCoding); // dont need to add function execution -> () only give reference -> printCoding


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);

// })  // output => js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach( (item) => {
    console.log(`currently i am learning ${item.languageName}`);
})