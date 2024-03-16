const score = 599
console.log(score); // 599

const balance = new Number(1000);
console.log(balance); // [Number: 1000]
console.log(balance.toString()); // 1000
console.log(balance.toString().length); // 4

const otherNum = 124.796606544;
console.log(otherNum.toFixed(3)); // 124.797
console.log(otherNum.toPrecision(2));

const hundreads = 10000000
console.log(hundreads.toLocaleString('en-In'));

// ------------------------------------------- maths -------------------------------------------

console.log(Math);
console.log(Math.abs(-5)); // negative val to positive //5
console.log(Math.pow(5,2)); //25
console.log(Math.sqrt(64)); //8
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.7)); // 5
console.log(Math.max(6764,3676,3764,8764,8876,3457,9954,7567)); // 9954
console.log(Math.min(6764,3676,3764,8764,8876,3457,9954,7567)); // 3457

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

min = 10;
max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);