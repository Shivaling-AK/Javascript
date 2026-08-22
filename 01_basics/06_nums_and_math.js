const score = 400;
// console.log(score); // 400

const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//************************** Maths ************************************

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4  (Converts -ve values into +ve values)
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.5)); // 5

// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // 0.7471877539016591
// console.log((Math.random()*10) + 1); // 5.69144177572643
// console.log(Math.floor(Math.random()*10) + 1); // 6

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 17