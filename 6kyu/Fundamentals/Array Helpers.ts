// --- Codewars Link: https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
// --- Title: Array Helpers
// --- Kyu: 6 kyu
// --- Date Solved: 9/29/25

// --- My Solution:
Array.prototype.square = function() {
  return this.map(e => e ** 2);
};

Array.prototype.cube = function() {
  return this.map(e => e ** 3);
};

Array.prototype.average = function() {
  return this.length === 0
    ? NaN
    : this.reduce((acc, cur) => acc + cur, 0) / this.length;
};

Array.prototype.sum = function() {
  return this.reduce((acc, cur) => acc + cur, 0);
};

Array.prototype.even = function() {
  return this.filter(e => e % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(e => e % 2 !== 0);
};


/*
--- Reflection & Struggle ---

Primary Struggle Tag: classes, methods and prototypes
Specific Note: used gpt, originally I extended a class from Array but didn't work because of how this kata test cases were
Key Learning/Reinforcement: to add a prototype to an exciting class in js you use .prototype.name = funciton(){return} 
*/

//Alternative Solution Link: 
