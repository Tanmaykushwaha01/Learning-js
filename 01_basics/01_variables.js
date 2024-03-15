const accountId = 111111
let fname = 'tanmay'
var accountPassword = '1234'
accountCity = 'Gorakhpur'
let accounState;
// accountId = 2 we cant change the name beacuse it is constant

console.log(accountId);
/*
prefer to use let rather than var because of block scope and functional scope
var can reassign and update from any where rather tham let is only be update within the block
*/

fname = 'tanmay kushwaha'
accountPassword = 23484
accountCity = 'Gorakhpur, Uttar Pradesh'
console.table([fname, accountId, accountPassword, accountCity, accounState]);
