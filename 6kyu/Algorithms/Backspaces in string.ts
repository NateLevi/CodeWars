// --- Codewars Link: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
// --- Title: Backspaces in string
// --- Kyu: 6 kyu
// --- Date Solved: 11/7/25

/*
P: s = string
R: return string without #'s'
E: "abc#d##c"      ==>  "ac"
P: 
loop through string, if there is a #, replace it with a space, then join the string together
if element is a # then remove
*/

// --- My Solution:
function cleanString(s) {
  const stack = [];
  
  for (let char of s) {
    if (char === '#') {
      stack.pop(); 
    } else {
      stack.push(char);
    }
  }
  
  return stack.join('');
}

/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: stack  
Specific Note: used gpt, which used for of instead of for i loop
Key Learning/Reinforcement: stacks
*/

//Alternative Solution Link: 
clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
