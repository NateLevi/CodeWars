/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99
*/
function formatMoney(amount){
  return '$' + amount.toFixed(2)
}
/*
P: a number with decimals
R: adding $ before the first number
E: 3 -> $3.00
*/
