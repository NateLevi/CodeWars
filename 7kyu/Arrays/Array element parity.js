// --- Codewars Link: https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript
// --- Title: Array element parity
// --- Kyu: 7 kyu
// --- Date Solved: 5/12/25

/*
P: arr = array of negative or postive numbers
R: return the element/number that is unique or doesn't have it's opposite in the array
E: [1, -1, 2, -2, 3] => 3
P: Loop through the array, if the array does not includes the elements opposite return that element
*/

// --- My Solution:
function solve(arr){
    
  return arr.filter(e => !arr.includes(-e))[0]
  
};
/*
--- Reflection & Struggle ---

Primary Struggle Tag: filtering out the non opposite number, had to look up how to code opposite of a value
Specific Note: 
Key Learning/Reinforcement: negate a value, using find() in the alternate solution
*/

//Alternative Solution Link: 

const solve=a=>a.find(e=>!a.includes(-e));
