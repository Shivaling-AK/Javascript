const marvel_heroes = ["Thor","Iron-Man","Spider-Man"];

const dc_heroes = ["Super-Man","Flash","Bat-Man"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // ['Thor','Iron-Man','Spider-Man',[ 'Super-Man', 'Flash', 'Bat-Man' ]]
// console.log(marvel_heroes[3]); // [ 'Super-Man', 'Flash', 'Bat-Man' ]
// console.log(marvel_heroes[3][1]); // Flash (It's not good)

// const all_heroes=marvel_heroes.concat(dc_heroes);
// console.log(all_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', 'Super-Man', 'Flash', 'Bat-Man' ]

// or(another way)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // we can insert multiple arrays for spread operator
// console.log(all_new_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', 'Super-Man', 'Flash', 'Bat-Man' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];
const another_array2 = another_array.flat(Infinity); //  Provide depth
// console.log(another_array2);

// we can ask 
// console.log(Array.isArray("Shivaling")); // false
// console.log(Array.isArray(another_array)); // true

// to convert
// console.log(Array.from("Shivaling")); // we can give objects, string 

console.log(Array.from({name: "Shivaling"})); // [] it gives empty array, directly cannot convert it into array, first we tell which one is converting into array i.e,, keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]