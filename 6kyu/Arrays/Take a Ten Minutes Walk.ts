// --- Codewars Link: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// --- Title: Take a Ten Minutes Walk
// --- Kyu: 6 kyu
// --- Date Solved: 8/19/25

/*
P: array of one letter strings, one min per element
R: if there are 10 elements return true else false
E: 
*/


// --- My Solution:
function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  
  let n = 0, s = 0, e = 0, w = 0;
  
  for(let dir of walk){
    if (dir === 'n') n++;
    if (dir === 's') s++;
    if (dir === 'e') e++;
    if (dir === 'w') w++;
  }
  return n === s && e === w
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out the kata based on the description missed the going back to start part
Specific Note: used gpt to help understand the question
Key Learning/Reinforcement: using for of loop on an array instead of a regular for loop
*/

//Alternative Solution Link: 
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}
