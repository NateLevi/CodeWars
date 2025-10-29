// --- Codewars Link: https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
// --- Title: Integers: Recreation One
// --- Kyu: 5 kyu
// --- Date Solved: 10/29/25

/*
Check every number from m to n and push the current elements divisors into a seperate array
If it is then create an array pushing those numbers to it
then square each number and sum them together
if the sum can be squared into add it to the second element in sub array, add the original number loop left off at to the
first element in the subarray, then push each subarry into a big array
*/

// --- My Solution:
function listSquared(m, n) {
  let arr = []
  
  for(let i = m; i <= n; i++){
    
    let divisorArr = []
    
    for(let j = 1; j <= i;j++){
      if(i % j === 0){
        divisorArr.push(j)
      }
      
    }
    let sqSum = divisorArr.map(e => e**2).reduce((acc,cur) => acc += cur,0)
      if(Number.isInteger(Math.sqrt(sqSum))){
        arr.push([i,sqSum])
      }
  }
  return arr
}

/*
--- Reflection & Struggle ---
Primary Struggle Tag: square roots, divisablity, modulars, nested arrays
Specific Note: overall did most by myself, wrote pseduocode out, messed up on one step which was divisibility of the current element, and my loops did not
include i or j in them which should have
Key Learning/Reinforcement: square roots, divisiblity, nested loops and arrays
*/

//Alternative Solution Link: 
