// --- Codewars Link: https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
// --- Title: Find the missing element between two arrays
// --- Kyu: 7 kyu
// --- Date Solved: 7/5/25

/*
P: two array of integers, arr2 is shuffled of arr1 with one element missing
R: return integer thats missing from arr2
E: find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
P: sort both arrays ascending, loop through both, compare elements, if same move on if not return arr1 element
*/

// --- My Solution:
function findMissing(arr1, arr2) {
  
  let arr1Sorted = arr1.sort((a,b)=> a - b)
  let arr2Sorted = arr2.sort((a,b)=> a - b)

  for(let i=0; i < arr1Sorted.length; i++){
    
    if(arr1Sorted[i] !== arr2Sorted[i]) {
      return arr1Sorted[i]
    }
    
  }
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: comparing elements with 2 arrays
*/

//Alternative Solution Link: 
const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);
