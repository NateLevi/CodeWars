// --- Codewars Link: https://www.codewars.com/kata/59cbcb4523dacc2ccd000030/train/javascript
// --- Title: What rank is this card?
// --- Kyu: 7 kyu
// --- Date Solved: 8/18/25

// --- My Solution:
function rank(card) {
  const Cards = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
  };

  let test = card.split('');
  
  if(!Cards[test[0]]){
    return 0
  }
  else{
      return Cards[test[0]];
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Little rusty, but I tried for of loop at first but just doing Cards[test] was simpler
Specific Note: used gpt for a little help on correcting my syntax 
Key Learning/Reinforcement: Learned that you can do !Object[value] to return true or false for conditional testing
*/

//Alternative Solution Link: 
function rank(card) {
  return ['','2','3','4','5','6','7','8','9','T','J','Q','K','A'].indexOf(card[0]) + 1;
}
