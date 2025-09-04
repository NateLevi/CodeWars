// --- Codewars Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// --- Title: Persistent Bugger.
// --- Kyu: 6 kyu
// --- Date Solved: 9/4/25

/*
P: positive parameter
R: return multiplicative of num 
E: 39 --> 3
P: split number up, multiply by numbers until length is 1 then return that number
*/

// --- My Solution:
function persistence(num) {
  let str = String(num).split('').map(e => Number(e))
  let count = 0
  while (str.length > 1){
    
    let test = str.reduce((acc,val) => acc * val, 1)
    
    str = String(test).split('').map(e => Number(e))
    
    count++
    
  } 
  return count
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: while loop and infinite looping
Specific Note: used gpt for help with while loop
Key Learning/Reinforcement: while loop, using reduce in a while loop instead of for and i, 
*/

//Alternative Solution Link: 
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
