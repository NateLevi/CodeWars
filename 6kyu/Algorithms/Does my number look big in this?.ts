// --- Codewars Link: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
// --- Title: Does my number look big in this?
// --- Kyu: 6 kyu
// --- Date Solved: 10/14/25

/*
P: a number
R: boolean if numbers to the power of length added equals the value
E:     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
P: Split digits, put each one to the power of length, then add them together, 
*/

// --- My Solution:
function narcissistic(value) {
  let strNum = String(value).split('')
  let strLength = strNum.length
  let sumArr = strNum.map(e=> Number(e)).map(e => e ** strLength ).reduce((acc,cur) => acc += cur,0)

  if(sumArr === value){
    return true
  }
  else{
    return false
  }
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: conditional reminder, splitting to strings and then back to numbers
Specific Note: 
Key Learning/Reinforcement: a conditional that returns true does not automatically return false if not met, you can't just add Number to map, you need Number(e),

*/

//Alternative Solution Link: 
function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}
