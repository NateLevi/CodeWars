// --- Codewars Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// --- Title: Moving Zeros To The End
// --- Kyu: 5 kyu
// --- Date Solved: 10/16/25

// --- My Solution:
function moveZeros(arr) {
  
  let l = 0
  
  for(let r = 0 ; r < arr.length;r++){
    if(arr[r] !== 0){
      arr[l] = arr[r]
      l++    
    }
  }
  
  for(let i = l ; i < arr.length;i++){
    arr[i] = 0
  }
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out if two pointer is needed
Specific Note: ask gpt for two hints
Key Learning/Reinforcement: manipulate the array in place, setting values to the front then looping through again
*/

//Alternative Solution Link: 
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

//O(n log n)
function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}
