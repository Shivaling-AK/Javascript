// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Shivaling",
    "full name" : "Shivaling AK", // we can't access using jsUser.full name (use only square notation)
    [mySym] : "mykey1", // Square brackets are required when accessing an object property using a Symbol variable.
    age : 22,
    location: "Jamakhandi",
    email : "shivaling@gmail.com",
    isLoggedIn : false,
    lastLogInDays:["Monday","Saturday"]
};

// console.log(jsUser.name);
// alternate way
// console.log(jsUser["name"]); // if we give jsUser[name] it give ReferenceError: name is not defined (basically name is behind the scene treated as string("name") in object)

// console.log(jsUser["full name"]);

/* 
    mySym : "mykey1" 
    console.log(jsUser.mySym); // mykey1
    console.log(typeof jsUser.mySym); // string
*/

/* 
    [mySym] : "mykey1"
    console.log(jsUser[mySym]); // mykey1
    console.log(typeof jsUser.mySym); // undefined
    console.log(typeof mySym); // symbol

    Important: typeof jsUser.mySym outputs the string "undefined" technically, because typeof always returns a string.
*/

// To change the objects values
jsUser.email = "shiva@gmail.com"; // use = to override the values

// To lock the object 
// Object.freeze(jsUser); // values will not propagate(shallow freeze)
// jsUser.email = "pavan@gmail.com"; 

// console.log(jsUser);
/*
{
    name: 'Shivaling',
    'full name': 'Shivaling AK',
    age: 22,
    location: 'Jamakhandi',
    email: 'shiva@gmail.com',
    isLoggedIn: false,
    lastLogInDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  }

  if we change [mySym] : "mykey1" to mySym : "mykey1" it gives
  {
    name: 'Shivaling',
    'full name': 'Shivaling AK',
    mySym: 'mykey1',
    age: 22,
    location: 'Jamakhandi',
    email: 'shiva@gmail.com',
    isLoggedIn: false,
    lastLogInDays: [ 'Monday', 'Saturday' ]
  }
 */

jsUser.greeting = function(){
    console.log("Hello JS");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`); // this is use for same object reference
}
// console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // Hello JS
console.log(jsUser.greetingTwo()); // Hello JS user Shivaling

// we can access properties and values of an objects using dot, bracket notation