const user = {
    username: "Shivaling",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username} , welcome to website`); // Shivaling , welcome to website
        console.log(this); /*
                                {
                                    username: 'Shivaling',
                                    price: 999,
                                    welcomeMsg: [Function: welcomeMsg]
                                }
                            */
        
    }

}

// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg(); // Sam , welcome to website
                  // { username: 'Sam', price: 999, welcomeMsg: [Function: welcomeMsg] }

// console.log(this); // {}

/*
    If we run 'this' in web browser it's global object is 'Window'
    
    If we run 'this' in standalone applications like node it's {} (Empty Object)
*/

// function chai(){
//     let username = "Shivaling";
//     console.log(this);
// }
// chai(); 
/* <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    navigator: [Getter],
    crypto: [Getter]
  }
 */

// function chai(){
//     let username = "Shivaling";
//     console.log(this.username); // Inside functions this.username we can't use, It's works on objects
// }
// chai(); // undefined 


// const chai = function() {
//     let username = "Shivaling";
//     console.log(this.username); // undefined
// }
// chai();

/*********************************************************************************** */

// const chai = () => {
//     let username = "Shivaling";
//     console.log(this); // {}
// }
// chai();

// const chai = () => {
//     let username = "Shivaling";
//     console.log(this.username); // undefined
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2; // Explicit return
// }
// console.log(addTwo(3,5)); // 8

// const addTwo = (num1, num2) => num1 + num2; // Implicit return
// console.log(addTwo(3,5)); // 8

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3,5)); // 8

// const addTwo = (num1, num2) => {username : "Shivaling"};
// console.log(addTwo(3,4)); // undefined

const addTwo = (num1, num2) => ({username : "Shivaling"}); // If we want to return object, wrap in ()
// console.log(addTwo()); // { username: 'Shivaling' }