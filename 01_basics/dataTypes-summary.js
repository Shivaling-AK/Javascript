/* Primitive datatypes: 
    7 types: String, Number, Boolean, null, undefined, Symbol, BigInt */

const score =  100;
const scoreValue =  100.3;
console.log(typeof scoreValue); // number

const isLoggedIn = false;

const outsideTemp = null;
console.log(typeof outsideTemp); // object

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(typeof id); // Symbol


console.log(id === anotherId); // false

const bigNumber = 3647854785248524521112n;
console.log(typeof bigNumber); // bigint

/* Javascript is dynamically typed language */


/*Reference (Non-Primitive):
    Arrays, Objects, Functions */

// Array
const heroes = ['Shakti-Man', 'Super-Man', 'Bat-Man'];
console.log(typeof heroes); // object


// Object
let myObj = {
    name: "Shivaling",
    age: 22
};
console.log(typeof myObj); // object


// Function
const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof myFunction); // function (funtion object)

myFunction();


/*
| **Type of Value**                                   | **`typeof` Result**                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Undefined**                                       | `"undefined"`                                                                                      |
| **Null**                                            | `"object"`                                                                                         |
| **Boolean**                                         | `"boolean"`                                                                                        |
| **Number**                                          | `"number"`                                                                                         |
| **String**                                          | `"string"`                                                                                         |
| **Object** (native & does not implement `[[Call]]`) | `"object"`                                                                                         |
| **Object** (native or host & implements `[[Call]]`) | `"function"`                                                                                       |
| **Object** (host & does not implement `[[Call]]`)   | Implementation-defined, except it may not be `"undefined"`, `"boolean"`, `"number"`, or `"string"` |

*/

// Note: typeof null returning "object" is a well-known historical behavior in JavaScript.