// --- Codewars Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// --- Title: Find the unique number
// --- Kyu: 6 kyu
// --- Date Solved: 9/24/25

// --- My Solution:
function findUniq(arr) {
  
  let nums = [...new Set(arr)]
  
  let obj ={
    [nums[0]] : 0,
    [nums[1]] : 0
  }
  
  for(let i=0; i < arr.length;i++){
    if(arr[i] in obj){
      obj[arr[i]] += 1
    }
  }
  
  for(let i in obj){
    
    if(obj[i] === Math.min(...Object.values(obj))){
       return Number(i)
    }
  }
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
