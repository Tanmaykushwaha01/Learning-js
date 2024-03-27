// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( function (val) {
//     console.log(val);
//     return;
// })

// console.log(values);  // undefined
// means for each dont return any value

// // filter method => The filter() method is an iterative method.
// // It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.
//  Array elements which do not pass the callbackFn test are not included in the new array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// newNums = myNums.filter( (nums) => nums > 5);  //  (nums) => nums > 5    --> take condition
// console.log(newNums);

// if i had to do the same thing in for each

newNums = [];
myNums.forEach((num) => {
  if (num > 5) {
    newNums.push();
  }
});
console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let myBooks = books.filter((bk) => bk.publish > 1990);
myBooks = books.filter((bk) => bk.publish > 1990  && bk.genre == 'Science');
console.log(myBooks);
