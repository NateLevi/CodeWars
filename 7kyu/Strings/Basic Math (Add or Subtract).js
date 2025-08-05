// --- Codewars Link: https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
// --- Title: Basic Math (Add or Subtract)
// --- Kyu: 7 kyu
// --- Date Solved: 8/5/25

/*
P: letters and numbers in a string
R: string number from adding or subtracting string numbers
E: "1plus2plus3plus4"  --> "10"
P: 
*/

// --- My Solution:

/*
--- Reflection & Struggle ---

Primary Struggle Tag: looping through strings with nums and adding conditional for the next element in the loop. Also turning string numbers into numbers.
Specific Note: used chatgpt a bit for this one. I think I understood it, it was just the regex I had to remember. Also I was a bit lazy with the answer.
Key Learning/Reinforcement: /\d+/g is for testing digits in a string. You can split a string apart by using regex. Not starting with the first element might work better in scenarios. 

*/

//Alternative Solution Link: 
function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}
