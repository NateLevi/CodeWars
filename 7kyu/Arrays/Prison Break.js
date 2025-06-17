// --- Codewars Link: https://www.codewars.com/kata/6507e3170b7009117e0c7865/train/javascript
// --- Title: Prison Break
// --- Kyu: 7 kyu
// --- Date Solved: 6/17/25

// --- My Solution:
function freedPrisoners(prison){
  if (prison[0] === false) return 0

  let count = 1

  prison = prison.map(e => !e)

  for (let i = 1; i < prison.length; i++) {
    if (prison[i] === true) {
      count += 1
      prison = prison.map(e => !e)
    }
  }

  return count
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Changing array when including first element, reassigning the array using map in loop
Specific Note: Used chatgpt for how to change the array inside the for loop
Key Learning/Reinforcement: changing an array in a for loop
*/

//Alternative Solution Link: 
