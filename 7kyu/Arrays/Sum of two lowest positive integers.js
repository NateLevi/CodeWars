function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).splice(0,2).reduce((acc,cur)=>acc += cur,0) 

}
/*
P: Array of numbers, minimum 4 positive integers
R: return the sum of the two lowest positive numbers
E: [1,2,3,4,5] -> 3
*/
