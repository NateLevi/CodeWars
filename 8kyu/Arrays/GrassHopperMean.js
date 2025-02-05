/*
Find the mean (average) of a list of numbers in an array.
*/

/*
P:array of numbers
R: number representing the mean
E: [1,3,5,7] return 4
*/
// make a empty slot variable, use reduce method to accumulate nums, then divide by amount of nums
function findAverage(nums) {
  let sum = nums.reduce((acc,cur)=> acc += cur,0);
  return sum/nums.length
}
