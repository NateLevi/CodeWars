// --- Codewars Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// --- Title: Break camelCase
// --- Kyu: 6 kyu
// --- Date Solved: 9/5/25

/*
P: camel case string
R: break up string 
E: "camelCasing"  =>  "camel Casing"
P: 
*/

// --- My Solution:
function solution(string) {
  if(string.length === 0){
    return ''
  }
  let splitWord = string.split('')
  
  for(let i=0; i < splitWord.length;i++){
    
    if(/[A-Z]/.test(splitWord[i])){
      
      splitWord.splice(i,0," ")
      i++
    }
   
  }
  return splitWord.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using splice in a conditional within a loop
Specific Note: used gpt for splice in a loop
Key Learning/Reinforcement: splice mutates the array and the order is (insert,amount remove,"")
*/

//Alternative Solution Link: 
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

//
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}
