// --- Codewars Link: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
// --- Title: Minimize Sum Of Array (Array Series #1)
// --- Kyu: 7 kyu
// --- Date Solved: 7/7/25

// --- My Solution:
function minSum(arr) {
  arr.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    total += arr[i] * arr[arr.length - 1 - i];
  }
  return total;
}


/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: Used chatgpt a bit, but overall I had the idea, just didn't think about / length by 2 and doing -1 - i
Key Learning/Reinforcement: dividing the length by 2 and subtracting i from arr.length. 
*/

//Alternative Solution Link: 
function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
