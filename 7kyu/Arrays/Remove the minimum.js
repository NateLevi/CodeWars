function removeSmallest(numbers) {
  const index = numbers.indexOf(Math.min(...numbers))
  return numbers.filter((e,i)=> i !== index)
}
/*
P: Array of integers 
R: same array without the smallest value
E: [1,2,3,4]-> [2,3,4]
*/
