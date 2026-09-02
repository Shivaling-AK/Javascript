// if

// if(true){
// Executes
// }

// if (false) {
// Not exectes
// }

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // console.log("Logged In");
}

// <, >, <=, >=, ==, !=, ===

if (2 == "2") {
    // console.log("Executed");
}

if (2 === "2") {
    // console.log("Executed");
} else {
    // console.log("Not executed");
}

const temperature = 36;
if (temperature < 50) {
    // console.log("Less than 50");
} else {
    // console.log("Temperature is greater than 50");
}

const score = 200;
if (score > 100) {
    const power = "fly";
    // console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`); // ReferenceError: power is not defined


const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("Less than 500");

// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}