const userEmail = "Shivaling@gmail.com";

if (userEmail) {
    // console.log("Got user email"); // "Shivaling@gmail.com" , []
} else {
    // console.log("Don't have user email"); // ""
}

// falsy values -> (false, 0, -0, BigInt 0n, "", null, undefined, NaN)

// truthy values -> ("0", 'false', " ", [], {}, function(){})

const userName = []
if (userName.length === 0) {
    // console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15
// val1 = null ?? 10 ?? 20; // 10

// console.log(val1);

/************************************************************************* */

// Ternary Operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More than 80");