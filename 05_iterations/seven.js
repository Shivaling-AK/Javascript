const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num + 10);
// const newNums = myNums.map((num) => {return num + 10});

// Chaining
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums);

// map() is an array method used to transform every element of an array and return a new array.

// The main idea is: map() takes every element → performs an operation → returns the transformed elements.

/*
 Important points:
 map() works on arrays.
 It returns a new array.
 It does not modify the original array.
 It executes the callback for every element.
 The returned array normally has the same number of elements as the original.
 */

 // map() is an array method used to transform each element of an array and returns a new array containing the transformed elements.