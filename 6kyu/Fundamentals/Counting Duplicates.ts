// --- Codewars Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// --- Title: Counting Duplicates
// --- Kyu: 6 kyu
// --- Date Solved: 8/25/25

/*
P: strings with letters or numbers
R: return letters or numbers that occur more than once
E: "aabbcde" -> 2 # 'a' and 'b'
P: 
*/

// --- My Solution:
function duplicateCount(text){
  let word = text.toLowerCase().split('')
  let obj = {}
  
  
  for(let i=0; i < word.length;i++){
    
    if(!(word[i] in obj)){
      obj[word[i]] = 1
    }
    else if(word[i] in obj){
      obj[word[i]] ++
    }
  }
  
  let result = 0
  
  if (Object.keys(obj).length === 0){
    return 0
  }
  
  for(let test in obj){
    if(obj[test] > 1){
      result += 1
    }
  }
  return result

}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: creating a obj, loop through it and understanding the counting logic
Specific Note: used gpt to help me through steps, but mostly thought through it myself
Key Learning/Reinforcement: Using objects is very helpful, you can use "in" to check if something
is in a obj. Plain objects are not iterable meaning you can't loop through it one by one.
Therefore you have to use the for...in loop. 
*/

//Alternative Solution Link: 
