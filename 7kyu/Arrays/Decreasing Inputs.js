// --- Codewars Link: https://www.codewars.com/kata/555de49a04b7d1c13c00000e/train/javascript
// --- Title: Decreasing Inputs.
// --- Kyu: 7 kyu
// --- Date Solved: 6/9/25

// --- My Solution:
function add(...nums) {
  
  if(nums.length === 1){
    return nums[0]
  }
  
  return Math.round(
    nums.reduce((sum, num, i) => sum + num / (i + 1), 0)
  );

}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: reduce inside syntax, math.round
Specific Note: 
Key Learning/Reinforcement: using rest operator changes the paramter inside function.
*/

//Alternative Solution Link: 
const add = (...args) =>
  Math.round(args.reduce((pre, val, idx) => pre + val / ++idx, 0));
