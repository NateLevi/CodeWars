// --- Codewars Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// --- Title: Array.diff
// --- Kyu: 6 kyu
// --- Date Solved: 8/27/25

// --- My Solution:
function arrayDiff(a, b) {

  let arr = []
  
  for(let i=0; i < a.length;i++){
    
    if(!b.includes(a[i])){
      
      arr.push(a[i])
      
    }
      
  }
    return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using includes instead of looping by [i]
Specific Note: 
Key Learning/Reinforcement: pretty easy, I got it just a little confused on comparing arrays
*/



//Alternative Solution Link: 
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
