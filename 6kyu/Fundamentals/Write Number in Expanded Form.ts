
// --- Codewars Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// --- Title: Write Number in Expanded Form
// --- Kyu: 6 kyu
// --- Date Solved: 9/27/25

// --- My Solution:
function expandedForm(num) {
  return String(num).split('').reverse().map((a,i)=> a * 10**i).filter(e=> e !== 0).reverse().join(' + ')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: difficult
Specific Note: looked at answer after about 30 min of trying
Key Learning/Reinforcement: Getting the place value by using 10^index 
*/
