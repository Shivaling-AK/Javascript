const name = "Shivaling";
const repoCount = 2;

// console.log(name + repoCount + " Value");  outdated

// console.log(`Hello my name ${name.toUpperCase()} and my repo count is ${repoCount}.`);

const gameName = new String('Palworld-Game');
// console.log(gameName); // [String: 'Palworld']

// console.log(gameName[0]); // P
// console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,3); // -ve values not allowed
// console.log(newString);

const anotherString = gameName.slice(0,-4); // -ve values are allowed.
// console.log(anotherString);

const newStringOne = "   Shivaling   ";
// console.log(newStringOne); //    Shivaling   
// console.log(newStringOne.trim()); // Shivaling

const url = "https://shivaling.com/shivaling%17kurennavar";
// console.log(url.replace('%17', '-')); // https://shivaling.com/shivaling-kurennavar

console.log(url.includes('shivaling')); // true
console.log(url.includes('pavan')); // false

console.log(gameName.split('-')); // [ 'Palworld', 'Game' ]