const accountId = 149;
let accountEmail = `shiva@gmail.com`;
var accountPassword = "abc149";

let accountState; // undefined 

accountCity = "Jamakhandi"; // We can write code without using keywords but it is not a good way

// accountId = 2; // not allowed (we can't change the value becz of const)

console.log(accountCity);

accountEmail = 'abc@gmail.com';
accountPassword = 'xyz149';
accountCity = 'Bagalkot';

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// { } // Scope (if else block & for loop)

/*
    Prefer not to use var becz of issues in block scope and functional scope
*/