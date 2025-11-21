// --- Codewars Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/solutions/javascript
// --- Title: Scramblies
// --- Kyu: 5 kyu
// --- Date Solved: 11/21/25

/*
P: both strings, only lower case letters
R: return true if a portion of str1 can be rearranged to match str2 else false
E: 
P:
if str1 contains all letters in str 2 then return true else false
*/

// --- My Solution:
function scramble(str1, str2) {
  let str1obj = {}
  let str2obj = {}
  
  for(let letter of str1){
    str1obj[letter] = (str1obj[letter] || 0) + 1
  }
  
  for(let letter of str2){
    str2obj[letter] = (str2obj[letter] || 0) + 1
  }

  for(let letter in str2obj){
    if(!(letter in str1obj)){
      return false
    }
    else if(str1obj[letter] < str2obj[letter]){
      return false
    }
    
  }
  return true
  
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: hashing, object comparing keys and values
Specific Note: used gpt for hints for the comparison of objects
Key Learning/Reinforcement: continue skips to the next iteration
*/

//Alternative Solution Link: 
