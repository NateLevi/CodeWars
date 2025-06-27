// --- Codewars Link: https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/javascript
// --- Title: Borrower Speak
// --- Kyu: 7 kyu
// --- Date Solved: 6/27/25

/*
P: a sentence string
R: string of the sentence, no caps, punctuation
E: ('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake')
P: 
*/

// --- My Solution:
function borrow(s){
  return s.split(' ').join('').toLowerCase().replace(/[^\w\s]|_/g, '')  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: regex for all punctuation
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
const borrow = s => s.toLowerCase().replace(/\W/g,'');
