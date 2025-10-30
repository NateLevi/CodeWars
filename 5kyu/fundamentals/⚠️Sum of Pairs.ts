// --- Codewars Link: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// --- Title: Sum of Pairs
// --- Kyu: 6 kyu
// --- Date Solved: 10/30/25

// --- My Solution:
function sumPairs(ints, s) {
  
  let obj = {}  
  
  for(let i = 0; i < ints.length;i++){
    
    let num = s - ints[i]
    
    if(obj[num] === true)  {
      return [num,ints[i]]
    }
    else{
      obj[ints[i]] = true
    }
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: hashs, time complexity
Specific Note: Solved with brute force, but learned about hashs
Key Learning/Reinforcement: hashs, store elements you've already seen with hashs, which are
basically just objects that you can reference, add to, so you can keep track of data you have 
already looped through.
*/

//Alternative Solution Link O(n): 



//Brute Force (On^2)

l = 0
arr = []
for(let r = 1; r < ints.length;r++){
    if(ints[l] + ints[r] === s){
      arr.push([ints[l],ints[r],r])
    }
    if(r === ints.length - 1){
      l++
      r = l
    }
    
  }
 let newArr = Math.min(...arr.map(e => e[2]))
  

  return [arr.find(e => e[2] === newArr)[0],arr.find(e => e[2] === newArr)[1]]
