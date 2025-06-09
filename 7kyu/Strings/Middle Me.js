// --- Codewars Link: https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript
// --- Title: Middle Me
// --- Kyu: 7 kyu
// --- Date Solved: 6/9/25

/*
P: strings with number
R: repeat y n times with x in the middle all as a string
E: (18, 'z', '#'), '#########z#########')
P: 
*/

// --- My Solution:
function middleMe(N, X, Y){
  let i = N / 2
  let str = Y.repeat(N)
  
  return N % 2 !== 0 ? X : str.slice(0,i) + X + str.slice(i,str.length)
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out how to insert things into strings
Specific Note: used chatgpt to find insert methods, and also if even or odd = no middle
Key Learning/Reinforcement: concat with slice for strings
*/

//Alternative Solution Link: 
function middleMe(N, X, Y){
  return N%2 ? X : Y.repeat(N/2)+X+Y.repeat(N/2)
}
