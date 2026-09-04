// for in
/*
 * We use the for...in loop to iterate over the keys (property names) of an object.
 * Why do we use myObject[key]? -> Because key contains a string
 * Use for...in mainly for objects, 
 * and for...of when you want to iterate through array values.
 */

const myObject = {
    js : 'Javascript',
    cpp : "C++",
    rb : 'Ruby',
    swift : 'Swift by apple'
}

// for (const key in myObject) {
//     console.log(key); // Gives all the keys like js, cpp, rb, swift
// }

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
    /*
     *  js shortcut is for Javascript
        cpp shortcut is for C++
        rb shortcut is for Ruby
        swift shortcut is for Swift by apple
     */
}

/*
 * for...in → keys/properties
 * for...of → values/iterable elements
 * Map → key-value pairs
 */

//*********************************************************** */

// Arrays also have keys -> by default numbers - starts from 0
const programming  = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    // console.log(key);
    // 0
    // 1
    // 2
    // 3
    // 4
}

for (const key in programming) {
    // console.log(programming[key]);
    // js
    // rb
    // py
    // java
    // cpp
}

/**************************************************************** */
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');

// for (const key in map) {
//     console.log(key);  // for...in is generally not used to iterate Map entries
// }