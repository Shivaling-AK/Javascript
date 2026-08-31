function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
}

// sayMyName();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);

}

// addTwoNumbers(); NaN
// addTwoNumbers(4,5); // 9
// addTwoNumbers(3,"4"); // 34
// addTwoNumbers(3,"a"); // 3a
// addTwoNumbers(3, null); // 3

// const result = addTwoNumbers(3,5); // 8
// console.log(result); // undefined


function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    // console.log("Hello"); // Unreachable code detected.

    return num1 + num2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result :", result); // 8

// function logInUserMsg(userName){
//     // if(userName === undefined){
//     //     console.log("Plz enter a username");
//     //     return;
//     // }
//     return `${userName} just logged in`
// }

// logInUserMsg("Shiva");
// console.log(logInUserMsg("Shiva")); // Shiva just logged in
// console.log(logInUserMsg()); // undefined just logged in

/* In if block "", undefined are considered as false  & ! is negate */

// Default value
function logInUserMsg(userName = "Sam"){
    // if(!userName){
    //     console.log("Plz enter a username");
    //     return;
    // }
    return `${userName} is just logged in`;
}

// console.log(logInUserMsg());
// console.log(logInUserMsg("Shiva")); // Override the default value

//***************************************************************************** */

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(2)); // 2
// console.log(calculateCartPrice(200, 300, 400)); // 200

// function calculateCartPrice(...num1){ // Rest operator ...
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]
 
function calculateCartPrice(value1, value2, ...num1){ // Rest operator ...
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 1000, 2000)); // [ 400, 1000, 2000 ] (Here value1 = 200 , value2 = 300 & remaining are in array ...)


/* Object */
const user = {
    userName : "Shivaling",
    price : 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

// handleObject(user); // Username is Shivaling and price is 299

handleObject({
    userName : "Sam",
    price : 399
}) // Username is Sam and price is 399 (We can pass object directly like this)

/* Array */
const myNewArray = [200, 400, 100, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray)); // 400
// console.log(returnSecondValue([200, 400, 100, 500])); // 400