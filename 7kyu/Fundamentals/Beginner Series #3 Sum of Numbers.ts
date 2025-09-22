// --- Codewars Link: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// --- Title: Beginner Series #3 Sum of Numbers
// --- Kyu: 7 kyu
// --- Date Solved: 9/22/25

// --- My Solution:
function getSum(a, b)
{
  if(a === b){
     return a
   }
  
  let sum = 0
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  
  for(let i = min ; i <= max;i++){
    
    sum += i
  }
    return sum
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out the question and the loop between integers
Specific Note: 
Key Learning/Reinforcement: setting i to something other then 0 and iteration length
*/

//Alternative Solution Link: 
