// --- Codewars Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// --- Title: Shortest Word
// --- Kyu: 7 kyu
// --- Date Solved: 7/1/25

/*
P: s = string of words
R: return the length of the shortest word
E: 
P: split the strings up, loop through, count lengths, return shortest
*/

// --- My Solution:
function findShort(s){
  
  return s.split(' ').sort((a,b)=> a.length - b.length)[0].length
  
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: sorting by length
Specific Note: 
Key Learning/Reinforcement: using length after a and b in a-b
*/

//Alternative Solution Link: 
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
