// --- Codewars Link: 
// --- Title: Count characters in your string
// --- Kyu: 6 kyu
// --- Date Solved: 9/11/25

// --- My Solution:
function count(string) {
  
  let counts = {}
  
  let word = string.split("")
  
  for(let i=0; i < word.length; i++){
    
    counts[word[i]] = 0
    
  }
  for(let i=0; i < word.length; i++){
    for(let key in counts){
      
      if(word[i] === key){
        counts[key] += 1
      }
      
    }
  }
  return counts
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: You can use a for of loop on a string. 
*/

//Alternative Solution Link: 
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
