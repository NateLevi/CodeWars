// --- Codewars Link: https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
// --- Title: SillyCASE
// --- Kyu: 7 kyu
// --- Date Solved: 7/3/25

/*
P: silly = string
R: return string but first half is lowercased and last half is uppercased
E: "brian"-> "briAN"
P: loop through string, use map, if element index is greater then midpoint use .toUpperCase()
*/

// --- My Solution:
function sillycase(silly) {
  let word = silly.split('')
  
  let midPoint = word.length/2
      
      
  return word.map((e,i)=> i >= midPoint ? e.toUpperCase() : e.toLowerCase()).join('')
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Finding mid point with division and using index with map
*/

//Alternative Solution Link: 
function sillycase(silly) {
  return silly.split('').map(function(c,i){return i<silly.length/2 ? c.toLowerCase():c.toUpperCase()}).join('')
}
