// --- Codewars Link: https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
// --- Title: Sums of Parts
// --- Kyu: 6 kyu
// --- Date Solved: 10/11/25

/*
P: ls = list of integers
R: return list of the sums of its parts
E:
P: loop through ls, remove the first element, then sum, then remove the next, etc, until the array length is 0
*/

// --- My Solution:
function partsSums(ls) {
  let arr = []
  let total = ls.reduce( (acc,cur) => acc += cur,0)
  
  arr.push(total)
  
  for(let i=0; i < ls.length;i++){
    
    total -=ls [i]
    arr.push(total)
    
  }
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: thinking through how to make algo more efficient
Specific Note: gpt helped me, i solved first time but algorithim was to slow using reducing in a loop
Key Learning/Reinforcement: you can subtract from the actual value ls[i], duh, and having reduce in a loop slows down the algo
*/

//Alternative Solution Link: 
