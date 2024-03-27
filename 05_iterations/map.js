const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.map( (num)=> { return num * 10 })
 let newNums = myNums.map( 
    (num)=> { return num * 10 })
    .map( (num) => num + 1)
    .filter( (val) => val > 50)


console.log(newNums);