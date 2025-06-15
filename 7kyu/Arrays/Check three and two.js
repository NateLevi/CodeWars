// --- Codewars Link: https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
// --- Title: Check three and two
// --- Kyu: 7 kyu
// --- Date Solved: 6/15/25

/*
P: array of 5 strings 
R: true or false if the array contains three and two of the same values
E: ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
P:
*/

// --- My Solution:
function checkThreeAndTwo(array) {
  
  let a = array.filter(e => e === "a").length
  let b = array.filter(e => e === "b").length
  let c = array.filter(e => e === "c").length
  
  if((a === 3 && (b === 2 || c === 2)) ||
    (b === 3 && (a === 2 || c === 2)) ||
    (c === 3 && (a === 2 || b === 2))) {
    return true;
  }
    return false;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: counting up elements
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
function checkThreeAndTwo(array) {
  let as = array.filter(x =>x === 'a').length;
  let bs = array.filter(x =>x === 'b').length;
  let cs = array.filter(x =>x === 'c').length;
  return (as === 3 || bs === 3 || cs=== 3)  
          && (as === 2 || bs === 2 || cs === 2);
}
