// --- Codewars Link: https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript
// --- Title: Are they square?
// --- Kyu: 7 kyu
// --- Date Solved: 5/11/25

/*
P: arr = array of numbers
R: return true if all elements in arr are square numbers, false if not
E: isSquare([1, 4, 9, 16]) --> true
P: 
*/

// --- My Solution:
var isSquare = function(arr){
  
  
  return arr.length < 1 ? undefined : arr.every(e => Number.isInteger(Math.sqrt(e)))
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using Number.isInteger(Math.sqrt(e)) to know if a number is squared
Specific Note: I didn't know how to check if a number is squared, I did a math guess, but it was wrong. Ai gave me the way to do it.
Key Learning/Reinforcement: forgot that every can check every element. Hence the every. 
*/

//Alternative Solution Link: 
var isSquare = function(arr){
  return (arr.length) ? arr.every(x=>Math.sqrt(x)%1==0) : undefined;
}
