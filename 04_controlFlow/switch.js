// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }          => syntax of switch statement

// we use switch when we have to check multiple condition
// like lock and key => we provide value to switch which we want to check and with any case it run the code get executed of that case


// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;   
// // if we dont add break, the next case will be executed even if the evaluation does not match the case. except default
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }
 


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;   
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
 