// --- Codewars Link: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// --- Title: Unique In Order
// --- Kyu: 6 kyu
// --- Date Solved: 9/7/25

/*
P: string,array
R: return list of items without same element next to each other
E:
P:
*/

// --- My Solution:
var uniqueInOrder=function(iterable){
  let arr = []
  if(!Array.isArray(iterable)){
    let word = iterable.split('')
  
  for(let i =0; i < word.length;i++){
    
    if(word[i] !== word[i+1]){
      arr.push(word[i])
    }
    
  }
  return arr
  }
  else{
    for(let i =0; i < iterable.length;i++){
    
    if(iterable[i] !== iterable[i+1]){
      arr.push(iterable[i])
    }
    
  }
  return arr
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Not much struggle just thinking
Specific Note: 
Key Learning/Reinforcement: array.isarray() to check if its an array
*/

//Alternative Solution Link: 
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}
