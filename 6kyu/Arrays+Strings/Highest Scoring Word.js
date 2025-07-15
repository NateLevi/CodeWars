// --- Codewars Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// --- Title: Highest Scoring Word
// --- Kyu: 6 kyu
// --- Date Solved: 7/15/25

/*
P: string of words
R: return highest scoring word based on a=1,b=2,c=3 etc.
E: abad is 8 (1 + 2 + 1 + 4).
P: asign numbers to each letter, split string into words/letters then count and add to a total
*/

// --- My Solution:
function high(x){
  let strings = x.split(' ')
  let newString = strings.map(word=>word.split(''))

  let test = newString.map((e)=> e.map(letter => letter.charCodeAt(0) - 96).reduce((acc,cur)=> acc += cur,0))
  
  let temp = test[0]
  for(let i=0;i < test.length;i++){
    if(test[i] > temp){
      temp = test[i]
    }
  }
  
  let indexOfHighestValue = test.indexOf(temp)
  
  return strings[indexOfHighestValue]
    
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out the charcode of letters and assigning them incrementally from 1
Specific Note: used chatgpt a little bit but it was mostly me test casing by trial and error
Key Learning/Reinforcement: mapping through nested arrays, finding index of elements in an array, making custom numbers from charCodeAt
*/

//Alternative Solution Link: 
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
