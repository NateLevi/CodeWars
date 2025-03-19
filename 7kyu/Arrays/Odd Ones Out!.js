function oddOnesOut(nums) {
  return nums.filter(v => nums.filter(x => x === v).length % 2 === 0);
}
/*
P: list of numbers in an array, numbers can repeat
R: array of the numbers that repeat an even amount of times
E: [1,2,2,3,3,3] -> [2,2]
P: Loop through the array, if theres an odd number of the number remove it from the array
*/
