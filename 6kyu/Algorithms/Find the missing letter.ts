// --- Codewars Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
// --- Title: Find the missing letter
// --- Kyu: 6 kyu
// --- Date Solved: 10/20/25

/*
P: array of string letters
R: return the missing letter
make a loop, compare array to alphabet then return element that's not equal 
*/

// --- My Solution:
function findMissingLetter(array){
  const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  let test = array.map(e => e.toLowerCase());
  const portion = lowerCase.slice(lowerCase.indexOf(test[0]), lowerCase.indexOf(test[test.length - 1]) + 1);
  
  for(let i = 0; i < portion.length; i++){
    if(portion[i] !== test[i]){
      return array[0] === array[0].toUpperCase() ? portion[i].toUpperCase() : portion[i];
    }
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: indexOf method
Specific Note: Used gpt to finish it, I was being lazy
Key Learning/Reinforcement: indexof, slicing, and uppercase and lowercase conditionals
*/

//Alternative Solution Link: 
