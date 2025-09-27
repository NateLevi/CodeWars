// --- Codewars Link: https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// --- Title: Data Reverse
// --- Kyu: 6 kyu
// --- Date Solved: 9/27/25

// --- My Solution:
function dataReverse(data) {
  
  const arr = []

for (let i = 0; i < data.length; i += 8) {
  const chunk = data.slice(i, i + 8)
    
    arr.unshift(chunk)
}
  return arr.flat()
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: loop alteration, unshift and flat meethods
Specific Note: 
Key Learning/Reinforcement: Changing loop iteration to += instead of just i++, using flat to unnest a nested array
*/

//Alternative Solution Link: 
const dataReverse = a => a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);
