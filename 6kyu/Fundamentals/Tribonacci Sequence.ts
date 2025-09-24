// --- Codewars Link: 
// --- Title: Tribonacci Sequence
// --- Kyu: 6 kyu
// --- Date Solved: 9/24/25

/*
P: signature = array, n = amount of first elements
R: array of numbers of the tribonachi sequence based on signature and n
E:
P: create an array, loop through signature pushing elements to an array, then taking those values and continue to push
until n is 0
*/

// --- My Solution:
function tribonacci(signature,n){
  if(n === 0){
    return []
  }
  else if(n === 1){
    return [1]
  }
  let arr = [signature[0],signature[1],signature[2]]
  
  for (let i = 3; i < n; i++) {
    let sliced = arr.slice(i - 3, i);
    let sum = sliced.reduce((acc, val) => acc + val, 0);
    arr.push(sum);
    
  }
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: question and looping with slicing
Specific Note: used gpt to correct but overall did it myself
Key Learning/Reinforcement: messing with the i in a for loop
*/

//Alternative Solution Link: 
