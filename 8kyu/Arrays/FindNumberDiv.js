/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
*/

function divisibleBy(numbers, divisor){

    //loop through the array, if the divisor is divisble by the numbers return the numbers into a new array
  
    return numbers.filter(num => num % divisor === 0).map(num => num);
}
/*
P: array of numbers, divisor number
R: array of divisible numbers
E: [1,2,3,4,5,6,7,8], 4 -> [4,8]
*/
