// --- Codewars Link: https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a/train/javascript
// --- Title: What's my golf score?
// --- Kyu: 7 kyu
// --- Date Solved: 6/18/25

/*
P: string of pars and a string of scores
R: Find difference between score and par then find total
E: ('443454444344544443', '353445334534445344'), -1)
P: Loop through both, compare each element, push difference to a variable, then add up totals
*/

// --- My Solution:
function golfScoreCalculator(parList, scoreList){
  
  let pars = parList.split('')
  let scores = scoreList.split('')
  
  let parsList2 = pars.map(e => Number(e))
  let scoreList2 = scores.map(e => Number(e))
  
  let result = []
  
  for(let i=0; i < parList.length; i++){
    result.push( scoreList2[i] - parsList2[i])
    
    
  }
  return result.reduce((a,c) => c += a,0)
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Comparing loops and changing strings to numbers
Specific Note: Not to hard, probably could have made it more concise
Key Learning/Reinforcement: comparing arrays
*/

//Alternative Solution Link: 
const golfScoreCalculator = (parList, scoreList) =>
  [...scoreList].reduce((result, score, index) => result += score - parList[index], 0)
