// --- Codewars Link: https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
// --- Title: Reverse every other word in the string
// --- Kyu: 6 kyu
// --- Date Solved: 10/01/25

/*
P: string of words
R: string of words that are reversed every other word
E:
P: loop through each word, if index is odd then reverse word, then join back then return
*/

// --- My Solution:
function reverse(str){
  let words = str.split(' ')
  
  let arr = []
  
  for(let i=0;i < words.length;i++){

    if(i % 2 !== 0){
      arr.push(words[i].split("").reverse().join(''))
    }
    else{
      arr.push(words[i])
    }
    
  }
  return arr.join(' ').trim()
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Using reverse on a string instead of an array, using trim method
*/

//Alternative Solution Link: 
