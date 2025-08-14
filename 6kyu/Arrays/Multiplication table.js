

// --- Codewars Link: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/solutions/javascript
// --- Title: Multiplication table
// --- Kyu: 7 kyu
// --- Date Solved: 8/14/25

// --- My Solution:
function multiplicationTable(size) {
  let arr = [];

  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    arr.push(row);
  }

  return arr;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: used gpt, it was simpler then I thought
Key Learning/Reinforcement: loop within a loop then push to a array outside of loop
*/

//Alternative Solution Link: 
