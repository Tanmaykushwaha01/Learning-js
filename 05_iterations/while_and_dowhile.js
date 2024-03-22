// ----------------------------- while loop -----------------------------
//A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. 
//The while loop can be thought of as a repeating if statement

// let index = 0;
// while (index <= 20) {
//     console.log(`the value of index is divisible by until 20 - ${index} `);
//     index += 2;      //  index = index + 2
// }

// let myArr = ['tanmay', 'vaibhav', 'vartika', 'anita', 'ashutosh']
// let i = 0;
// while (i < myArr.length) {  
//     console.log(myArr[i]);
//     i++;
// }

// -------------------------- difference in while and for ---------------------------

// for - Loops can execute a block of code a number of times
            // for (initialization condition; testing condition; increment/decrement)
            // {
                // statement(s)
            // }

// while - The while loop loops through a block of code as long as a specified condition is true.
            // while (boolean condition)
            // {
                // loop statements...
            // }


//----------------------------- do-while loop -----------------------------
// do while code run atleast one time even the first condition is false
//do...while loop is a code block to be executed once, and repeated as long as a condition is true.


let score = 200
do {
    console.log(`score is ${score}`);
    score += 30
} while (score< 440);


// let js = 20
// do {
//     console.log(`i ll learn js in ${js} days`);
//     js += 1
// } while (score< 15);
