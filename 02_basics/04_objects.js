// const obj1 = new Object(); // Singleton Objects 
// const obj2 = {} // Non-Singleton Objects 

const appUser = {};

appUser.id = 0o010103 // Octal literals are not allowed because disallowing them discourages programmers from using leading zeros as padding in a script.
//Octal literals and octal escape sequences are deprecated and will throw a SyntaxError in strict mode. The standardized syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (0o or 0O).
appUser.name = 'tanmay'
appUser.isLoggedIn = true
appUser.age = 21
// console.log(appUser);

const anotherObj = {
    email: "user@gmail.com",
    fullname: {
        userName: {
            fname: 'tanmay',
            lname: 'kushwaha'
        }
    }
}// N LEVEL NESTING IS POSSIBLE
// console.log(anotherObj.fullname.userName.lname);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

// const obj4 = Object.assign({}, obj1, obj2, obj3);     // Object.assign(target, source); 
// console.log(obj4);
// we use {} because if we dont use then the all the object store in 1st object  
//  Object.assign(obj1,obj2,obj3); => { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } => obj1 object changed


const obj4 = { ...obj1, ...obj2, ...obj3 }; // spread operator 
// console.log(obj4);

const user = [
    {
        id: 1,
        email: 'tanmay@gmail.com'
    },
    {
        id: 2,
        email: 'tanmay@gmail.com'
    },
    {
        id: 3,
        email: 'tanmay@gmail.com'
    },
    {
        id: 4,
        email: 'tanmay@gmail.com'
    },
    {
        id: 5,
        email: 'tanmay@gmail.com'
    },
    {
        id: 6,
        email: 'tanmay@gmail.com'
    },
]
// console.log(user[4].id); //id of the 5th number object

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.enteries(appUser));


// console.log(user[2].hasOwnProperty('id')); // to check any objects has particular value => boolean


// objects destructure

const course = {
    courseName: 'Chai aur javascript',
    price: 9999,
    courseInstructor: 'Hitesh Chaudhary'
}

// console.log(course.courseInstructor); 
//if you want write it 100 times but writing everytime course.courseInstructor is a lengthy task so we destructure it to make it concise

//Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.
// Even better, object destructuring can extract multiple properties in a single statement, can access properties from nested objects, and can set a default value if the property doesn't exist

const {courseInstructor : instructor} = course;

// console.log(instructor);

// json api format

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

