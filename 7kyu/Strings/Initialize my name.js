// --- Codewars Link: https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
// --- Title: Initialize my name
// --- Kyu: 7 kyu
// --- Date Solved: 5/8/25

/*
P: name = a string of first,middle or last names
R: return name, but if theres a middle name then initialize the middle names
E: 'John Bald Tony' -> 'John B. Tony'
P: split the strings, get the length if the digit is between 1st and last, initialize the first letters?
*/

// --- My Solution:
function initializeNames(name) {
  const arr = name.split(' ');

  if (arr.length <= 2) {
    return name; 
  }

  const middleInitials = arr.slice(1, -1).map(n => n[0] + '.');
  
  return [arr[0], ...middleInitials, arr[arr.length - 1]].join(' ');
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: getting the sliced middle names and including them with the first and last word
Specific Note: I over thought this coding problem. In the for loop I continuted the arr.length <=2 statement and then sliced it and then spliced it instead of just concatinating the return.
Key Learning/Reinforcement: use map to transform array with a slice portion. Don't overthink to much, if you think you're could is getting to long reset and start over. 

Alternative Solution Link: 
function initializeNames(name){
 var n = name.split(" ");
if(n.length < 3) return name;
for(i = 1; i < n.length-1; i++){
  n[i] = n[i][0] + ".";
}
return n.join(" ");
}

Review Notes: Needs review
*/
