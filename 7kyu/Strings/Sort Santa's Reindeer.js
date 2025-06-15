// --- Codewars Link: https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
// --- Title: Sort Santa's Reindeer
// --- Kyu: 7 kyu
// --- Date Solved: 6/15/25

// --- My Solution:
function sortReindeer(reindeerNames) {
  
  return reindeerNames.sort((a, b) => {
    let arrA = a.split(' ');
    let arrB = b.split(' ');
    
    let lastNameA = arrA[1];
    let lastNameB = arrB[1];
    
    return lastNameA.localeCompare(lastNameB);
  });
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using the sort method and localCompare
Specific Note: Have never used sort method like this, had to get help from chatgpt
Key Learning/Reinforcement: Putting code in the sort method and that localcompare method compares strings return -1 if before 0 or 1 if 
after 
*/

//Alternative Solution Link: 
const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
