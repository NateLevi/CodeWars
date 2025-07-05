// --- Codewars Link: https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/javascript
// --- Title: A Letter's Best Friend
// --- Kyu: 7 kyu
// --- Date Solved: 7/5/25

/*
P: strings
R: if a and b occur together more then once return true else false
E: ("he headed to the store", "h", "e") ➞ True
P: 
*/

// --- My Solution:
function bestFriend(txt, a, b) {
  
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a) {
      if (txt[i + 1] !== b) return false;
    }
  }
  return true;
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: when/where to put boolean return values
Specific Note: 
Key Learning/Reinforcement: kata lacked key test descriptions
*/

//Alternative Solution Link: 
function bestFriend(txt, a, b) {
  if (txt === '') {
    return true
  }
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) {
      return false
    }
  }
  return true
}
