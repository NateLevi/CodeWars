
// --- Codewars Link: https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript
// --- Title: Sorting Arrays
// --- Kyu: 7 kyu
// --- Date Solved: 5/30/25

/*
P: arrays
R: sort a2 by index of word in a1 that begins with same letter
E: a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'] a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
P: loop through a1, grab the first characters of the elements the sort a2 by those characters?
*/

// --- My Solution:
function sortArray(a1, a2) {

  let firstElements = a1.map(e => e[0])
  
  return a2.sort((a,b) => firstElements.indexOf(a[0]) - firstElements.indexOf(b[0]))
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: sort method
Specific Note: Didn't understand what sort is doing under the hood. In my code a2 is sorted by
the indexs of the sorted a1. The indexes are compared if return value is negative it goes first.
Key Learning/Reinforcement: sort method comparison tooling
*/

//Alternative Solution Link: 
const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );
