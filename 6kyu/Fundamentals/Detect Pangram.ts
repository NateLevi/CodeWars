// --- Codewars Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// --- Title: Detect Pangram
// --- Kyu: 6 kyu
// --- Date Solved: 9/6/25


// --- My Solution:
function isPangram(string){
  
  let obj = {
  a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
  n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
}

  
  let newString = string.toLowerCase().split('')
  
  for(let i=0; i < newString.length;i++){
    for(let letter in obj){
      if(newString[i] === letter){
        obj[letter] += 1
      }
    }
  }
  
  let val = true
  
  for(let letter in obj){
    if(obj[letter] === 0){
      val = false
    }
  }
  return val
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using a for loop and obj not being iterable 
Specific Note: 
Key Learning/Reinforcement: .hasOwnProperty returns true or false if key has a certain property
*/

//Alternative Solution Link: 
