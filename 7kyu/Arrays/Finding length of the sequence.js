// --- Codewars Link: https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript
// --- Title: Finding length of the sequence
// --- Kyu: 7 kyu
// --- Date Solved: 6/21/25

/*
P: array of numbers with n being the start and end of sub-array
R: return the amount of elements from start to end n
E: [1, 2, 3, 1], 1) = 4
P: 
*/

// --- My Solution:
var lengthOfSequence = function (arr, n) {
  let count = 0
  for(let i=0; i < arr.length; i++){
    if(arr[i] === n){
      count++
    }
  }
  
  let index = []
  for(let i=0; i < arr.length;i++){
    if(count < 2 || count > 2){
      return 0
    }
    
    else if(arr[i] === n){
      index.push(i)
    }
    
  }
  return arr.slice(index[0],index[1]+1).length
};
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Took a bit of thinking to realize what I needed to do. More specifically
indexing and handiling count cases. Felt like it was longer then needed.
Specific Note: used chatgpt to check my work, just one minor change fixed it doing idex[1]+1 instead
of index[1+]
Key Learning/Reinforcement: slicing excludes the last element of the index you give. I learned
a new method called .lastIndexOf() that returns the last occurence of the string passed.
*/

//Alternative Solution Link: 
const lengthOfSequence = (arr, n) =>
  arr.filter(val => val === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
