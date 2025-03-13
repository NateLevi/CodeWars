//1
/*
P: array of integers
R: if the sum of the number/s are odd or even.
E: [1,2,3] -> 6 -> "even"
*/
function oddOrEven(array) {
   let sum = array.reduce((acc,cur)=> acc += cur,0)
   return sum % 2 === 0 ? "even" : "odd"
}
