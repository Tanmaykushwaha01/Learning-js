// for (let index = 0; index <=10 ; index++) {
//     const element = index;
//     console.log(element);
// }
//     console.log(element);   // unable to print because of out of scope

// for (let index = 0; index <=10 ; index++) {
//     const element = index;
//     if (element == 5) {
//          //console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     for (let j = 1; j <=5 ; j++) {
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }


// let myArr = ['tanmay','vaibhav','vartika','anita','ashutosh']
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }


// break and continue

for (let i = 0; i < 8; i++) {
    if (i == 5) {
        console.log('break let the i get out of control flow or the loop ');
        break
    }
    console.log(i);
// the break statement used used to "jump out" of a control flow orloop.
}



for (let i = 0; i < 8; i++) {
    if (i == 5) {
        console.log('The continue statement breaks one iteration (in the loop) ');
        continue;
    }
    console.log(i);
}
//, if a specified condition occurs, and continues with the next iteration in the loop. 