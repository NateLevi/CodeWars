// --- Codewars Link: https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
// --- Title: Validate Credit Card Number
// --- Kyu: 6 kyu
// --- Date Solved: 12/10/25

// --- My Solution:
function validate(n) {
  let nums = String(n).split('').map(Number);
  let result = [];

  for (let i = 0; i < nums.length; i++) {

    if (nums.length % 2 === 0) {

      if (i % 2 === 0) {
        let numDouble = nums[i] * 2;
        if (numDouble > 9) {
          result.push(numDouble - 9);
        } else {
          result.push(numDouble);
        }
      } else {
        result.push(nums[i]);
      }

    } else {

      if (i % 2 !== 0) {
        let numDouble = nums[i] * 2;
        if (numDouble > 9) {
          result.push(numDouble - 9);
        } else {
          result.push(numDouble);
        }
      } else {
        result.push(nums[i]);
      }

    }
  }
  let sum = result.reduce((acc,cur)=> acc += cur,0)
  
  return sum % 10 === 0 ? true : false
  
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: nested conditionals, arrays
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
