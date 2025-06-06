// --- Codewars Link: https://www.codewars.com/kata/563d54a7329a7af8f4000059/train/javascript
// --- Title: Put a Letter in a Column
// --- Kyu: 7 kyu
// --- Date Solved: 6/6/25

// --- My Solution:
function buildRowText(index, character) {
  let columns = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
  
  columns[index] = character
  
  return '|' + columns.join('|') + '|';
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: using join 
Specific Note: I used chatgpt for hints, the join method is a bit confusing. I tried using
splice, but that shifted the elements of the array. So directly assigning the index worked. 
Key Learning/Reinforcement: 
join method adds items between each element
*/

//Alternative Solution Link: 

function buildRowText(index, character) {
  var arr = [" "," "," "," "," "," "," "," "," "];
  arr[index] = character;
  return `|${arr.join("|")}|`;
}
