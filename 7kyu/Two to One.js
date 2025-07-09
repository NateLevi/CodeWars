// --- Codewars Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// --- Title: Two to One
// --- Kyu: 7 kyu
// --- Date Solved: 7/8/25

/*
P: strings with letters a to z
R: sorted string alphabetically ascending
E: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
P: filter out the letters that are unique, then combine them, then locale compare them
*/

// --- My Solution:
function longest(s1, s2) {
  
  const newStr = s1.concat(s2)
  
  return [...new Set(newStr)].sort().join('')
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Learned that sort can be used on a string not just a number of arrays
*/

//Alternative Solution Link: 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
