// --- Codewars Link: https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// --- Title: CamelCase Method
// --- Kyu: 6 kyu
// --- Date Solved: 9/28/25

// --- My Solution:
String.prototype.camelCase = function() {
  return this
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: used gpt for help. 
Key Learning/Reinforcement: using .charAt() is good to use in the map method. Using slice(1) to slice the remaining characters
*/

//Alternative Solution Link: 
