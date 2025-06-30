// --- Codewars Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// --- Title: Descending Order
// --- Kyu: 7 kyu
// --- Date Solved: 6/30/25

/*
P: non-negative integers
R: return integers passed but opposite
E: 12345 -> 54321
P:
*/

// --- My Solution:
function descendingOrder(n){
  
  let nums = n.toString().split('').map(Number).sort((a,b)=> b-a)
  
  return parseInt(nums.join(''))

}

/*
P: non-negative integers
R: return integers passed but opposite
E: 12345 -> 54321
P:
*/
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Changing n to an array and then sorting with string restrictions
Specific Note: had to think through this, used a little chatgpt to understand numbers and strings for methods
Key Learning/Reinforcement: using map with just Number in it, can't use split or join on a numbered array
*/

//Alternative Solution Link: 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
