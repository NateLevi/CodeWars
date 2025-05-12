// --- Codewars Link: https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030/train/javascript
// --- Title: That unites us
// --- Kyu: 7 kyu
// --- Date Solved: 5/12/25

// --- My Solution:
function thatUnitesUs(array1, array2, n) {
  
  let arr = array1.concat(array2).sort()
  
  return  [...new Set(arr)].slice(0,n)
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: understanding question
Specific Note: It was hard to understand the question it didn't seem like I would concat the array. I had to look up the syntax for ...new Set
Key Learning/Reinforcement: the a - b you put in sort is for numbers, leave it blank for strings
*/

//Alternative Solution Link: 
function thatUnitesUs(array1, array2, n) {
  return array1
          .concat(array2)
          .sort()
          .filter((elem, i, array) => array.indexOf(elem) === i)
          .slice(0,n)
}

//OR

const thatUnitesUs=(a1, a2,n)=>[...new Set([...a1,...a2])].sort().slice(0,n);
