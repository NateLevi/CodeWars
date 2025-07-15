// --- Codewars Link: https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
// --- Title: Maximum Triplet Sum (Array Series #7)
// --- Kyu: 7 kyu
// --- Date Solved: 7/15/25

// --- My Solution:
function maxTriSum(numbers){
  
  let arr = [...new Set(numbers)]
  
  let array = arr.sort((a,b)=> b-a)
  
  let nums = [array[0],array[1],array[2]]
  
  return nums.reduce((acc,cur)=> acc += cur,0)
}
/*
--- Reflection & Struggle ---
Primary Struggle Tag: Didn't really understand the question at first
Specific Note: Used chatgpt to clarify the problem question
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}
