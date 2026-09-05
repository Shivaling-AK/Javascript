// reduce() is an array method used to process all elements of an array and reduce them into a single value.

// The important idea is: reduce() takes multiple array elements and produces one final value.

/*
numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
accumulator → stores the result obtained so far.
currentValue → current element being processed.
0 → initial value of the accumulator.
*/

// reduce() is an array method used to reduce all elements of an array into a single value by repeatedly applying a callback function.

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);

//     return acc + curval;
// }, 0);


const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Data Scientist Course",
        price: 12999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);