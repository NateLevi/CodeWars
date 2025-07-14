// --- Codewars Link: https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
// --- Title: Tidy Number (Special Numbers Series #9)
// --- Kyu: 7 kyu
// --- Date Solved: 7/14/25

/*
P: n = number, tidy or not
R: boolean if tidy or not
E: 12 ==> return true
P: 
*/

// --- My Solution:
function tidyNumber(n){
  let str = n.toString().split('')
  let copy = str.map((e)=>Number(e))
  
  let result = true
  for (let i=0 ; i < copy.length; i++){
    
    if(copy[i] > copy[i + 1])
      {
        result = false
      }
    
  }
  return result
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Not much struggle, just had to think through the loop and return true or false
Specific Note: 
Key Learning/Reinforcement: can't use split on numbers, use map to change elements from strings to numbers
*/

//Alternative Solution Link: 
const tidyNumber = n => {
  let s = n.toString();
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] > s[i+1]) return false;
  }
  return true;
}
