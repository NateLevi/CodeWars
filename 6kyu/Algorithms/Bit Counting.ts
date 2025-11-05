// --- Codewars Link: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// --- Title: Bit Counting
// --- Kyu: 6 kyu
// --- Date Solved: 11/5/25
/*
P: n = integer
R: return n in bit format
E: 1234 -> 5 bits
P:
*/

// --- My Solution:
function countBits(n) {
  if(n === 0){return 0}
  
  let arr = []
  
  while(n > 0){
    let remainder = n % 2
    
    if(remainder === 1){
      arr.push(1)
    }
    else{
      arr.push(0)
    }
    n = Math.floor(n / 2)
}
  return arr.reverse().filter(e => e === 1).length
}
/*

// My Complexity:
O(log n)
--- Reflection & Struggle ---

Primary Struggle Tag: mathmatics of number to bit and while loop
Specific Note: used gpt for hints
Key Learning/Reinforcement: converting a number to bit, you just use modular to get a remaider which will be either 1 or 0, using while loops instead of for i loops
*/

//Alternative Solution Link: 
countBits = n => n.toString(2).split('0').join('').length;
