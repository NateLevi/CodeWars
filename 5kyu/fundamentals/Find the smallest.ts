// --- Codewars Link: https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript
// --- Title: Find the smallest.ts
// --- Kyu: 5 kyu
// --- Date Solved: 11/12/25

/*
P: n = positive number of digits
R: array
E: 
P:
grab smallest number in n and move it to the front of n
loop through n, move i through each element compare it to the last smallest number, then when its done return number,
index, and element
*/

// --- My Solution:
function smallest(n) {
  let smallest = Infinity;
  let index = 0;   
  let element = 0; 
  let num = String(n).split('').map(Number);
  
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      let temp = num.slice();
      let removed = temp.splice(i, 1)[0];  
      temp.splice(j, 0, removed);       
      let realTotal = Number(temp.join(''));
      
      if (realTotal < smallest || 
         (realTotal === smallest && (i < element || (i === element && j < index)))) {
        smallest = realTotal;
        element = i; 
        index = j;  
      }
    }
  }
  
  return [smallest, element, index];
}
/*

// My Complexity:
O(n^3)
--- Reflection & Struggle ---

Primary Struggle Tag: using splice to remove elements and add elements, splice syntax
Specific Note: used gpt for small logic corrections, but overall solved myself
Key Learning/Reinforcement: Splicing returns nothing when you just insert elements, use [0] after splice to store element, setting variables to infinity when storing
the smallest value, 
*/

//Alternative Solution Link: 
