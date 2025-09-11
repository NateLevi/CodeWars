// --- Codewars Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
// --- Title: Delete occurrences of an element if it occurs more than n times
// --- Kyu: 6 kyu
// --- Date Solved: 9/11/25

/*
P: array of numbers
R: return arr but have the elements are appear n times
E:
P: count how many of each element, conditional if element occurs more then n, create new array with elements n times
*/

// --- My Solution:
function deleteNth(arr, n) {
  let obj = {};
  let array = [];
  
  for (let key of arr) {
    obj[key] = (obj[key] || 0) + 1;
  }
  
  for (let key in obj) {
    if (obj[key] > n) {
      obj[key] = n;
    }
  }
  
  for (let key of arr) {
    if (obj[key] > 0) {
      array.push(key);
      obj[key]--;   
    }
  }
  
  return array;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: used gpt for final check, but logic was mostly mine
Key Learning/Reinforcement: for of loop is can't be used on object because of iterablity
*/

//Alternative Solution Link: 
