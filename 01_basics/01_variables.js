const accountId = 9876;
let accountEmail = "shivaling@gmail.com";
var accountPassword = "123";
accountCity = "Jamakhandi";
let accountState;
// accountId = 2; // Not allowed

// {} -> Scope

accountEmail = "new@gmail.com";
accountPassword = "121212";
accountCity = "Bengaluru";

console.log(accountId);

/*
    Prefer not to use var
    Becz of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
9876
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 9876            │
│ 1       │ 'new@gmail.com' │
│ 2       │ '121212'        │
│ 3       │ 'Bengaluru'     │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/