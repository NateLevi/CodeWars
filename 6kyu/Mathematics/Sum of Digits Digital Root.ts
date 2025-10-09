// --- Codewars Link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// --- Title: Sum of Digits / Digital Root
// --- Kyu: 6 kyu
// --- Date Solved: 10/9/25

// --- My Solution:
function digitalRoot(n) {
do{
  n = n.toString().split('').map(Number).reduce((acc,cur)=> acc += cur,0)
}
while(n.toString().split('').length > 1);
  return n
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: do/while loops, recursion
Specific Note: used gpt to help with do, while syntax and difference between while and do while
Key Learning/Reinforcement: do while is do this while a value/variable is a certain way. Make
sure to set a variable for the recursion in the do brackets otherwise it doesn't get reassigned
in a loop. Do while runs atleast once while while loops may never run if condition is met. 
*/

//Alternative Solution Link: 
