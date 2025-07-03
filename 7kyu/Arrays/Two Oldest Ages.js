// --- Codewars Link: https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
// --- Title: Two Oldest Ages
// --- Kyu: 7 kyu
// --- Date Solved: 7/3/25

/*
P: ages = array of numbers
R: return two highest numbers within the array [second,first]
E: [1, 2, 10, 8] --> [8, 10]
P: sort array, put last element and second to last element into an array and return it
*/

// --- My Solution:
function twoOldestAges(ages){

  let newArr = ages.sort((a,b) => a - b)
  
  let last = newArr.pop()
  let first = newArr.pop()
  
  return [first,last]
  
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Pop permanently remove the last element from an array, also using .slice(-2) grabs last two
*/

//Alternative Solution Link: 
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)
