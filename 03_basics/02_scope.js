// var c = 100; // Global scope
let a = 300;

if (true) {
    let a = 10; // Block scope
    const b = 20; // Block scope
    // c = 30; // Block scope

    // console.log("Inner :", a); // 10
    
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

// console.log(a); // 300

/*********************************************************************** */

function one(){
    const username = "Shivaling";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if (true) {
    const username = "Shivaling";
    if (username === "Shivaling") {
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

/************************************Interesting************************************* */

console.log(addOne(5)); // 6
function addOne(num) {
    return num + 1;
}



// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5)); // 7