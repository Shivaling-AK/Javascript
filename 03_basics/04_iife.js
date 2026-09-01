// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB is connected`);
// }
// chai(); // DB is connected

/*
    To avoid Global pollution we use IIFE
 */
(function chai() {
    // Named IIFE
    console.log(`DB is connected`);
}) (); // DB is connected

/*
    To use back to back or multiple IIFE, first end the first IIFE code using Semicolon(;)
*/

( () => {
    // Un-named IIFE
    console.log(`DB connected`);
} ) (); // DB connected

( (name) => {
    console.log(`DB connected to ${name}`);
} ) ("Java"); // DB connected to Java