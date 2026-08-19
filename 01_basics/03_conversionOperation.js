let score = 33;

// console.log(typeof score); // number
// console.log(typeof (score)); // as a method

let score1 = "33";
// console.log(typeof score1); // string

let valueInNumber = Number(score1);
// console.log(typeof valueInNumber); // number

let score2 = "33abc";
let valueInNumber1 = Number(score2);
// console.log(typeof valueInNumber1); // number
// console.log(valueInNumber1); // NaN

let score3 = null;
let valueInNumber2 = Number(score3);
// console.log(typeof valueInNumber2); // number
// console.log(valueInNumber2); // 0

let score4 = undefined;
let valueInNumber3 = Number(score4);
// console.log(typeof valueInNumber3); // number
// console.log(valueInNumber3); // NaN

let score5 = true; // boolean
let valueInNumber4 = Number(score5);
// console.log(typeof valueInNumber4); // number
// console.log(valueInNumber4); // 1

let score6 = "Shivaling";
let valueInNumber5 = Number(score6);
// console.log(typeof valueInNumber5); // number
// console.log(valueInNumber5); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "JS";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "JS" => true


let someNumber = 17;

let stringNumber = String(someNumber);
// console.log(stringNumber); // 17
// console.log(typeof stringNumber); // string

// ************************* Operations *************************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.666666
// console.log(2%3); // 2

let str1 = "Hello";
let str2 = " Shivaling";

let str3 = str1 + str2;
// console.log(str3); // Hello Shivaling

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1"+ 2 + 2); // 122
// console.log(1+ 2 + "2"); // 32

// console.log(3 + 4 * 5 % 3); //console.log((3 + 4) * 5 % 3);


// Tricky

// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // unexpected token error
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Don't write confusing code

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

/* Prefix and Postfix */