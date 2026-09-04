// for of loop

// Array specific loop
// ["", "", ""]
// [{}, {}, {}]

// iterators - Objects, Arrays, String

/*
 * In JavaScript, we use the for of loop when we want to iterate over the values of an iterable such as an array, string, Set, or Map.
 * Because it is simple when you only care about the values, not the indexes.
 * for of → gives values
 * For arrays, if you want the actual elements, prefer for of.
 */
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greet);
    // console.log(`Each character is: ${greet}`);
}


// Maps

/** 
 * A Map is a JavaScript data structure used to store key-value pairs.
 * we commonly use destructuring
 * ? -> Map is useful when you need to store data as key → value pairs and want features specifically designed for that purpose.
 * Map is a collection of key-value pairs where each key is unique.
 */

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India'); // Duplicate values are not allowed - unique

// console.log(map); /*
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   } */

// for (const key of map) {
//     console.log(key); /*[ 'IN', 'India' ]
//                         [ 'USA', 'United States of America' ]
//                         [ 'Fr', 'France' ] */
// }

// Destructuring 
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    /*
    IN :- India
    USA :- United States of America
    Fr :- France
     */
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, vallue] of myObject) {
    // console.log(key, ':-', value); // TypeError: myObject is not iterable
}