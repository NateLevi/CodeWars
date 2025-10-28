// --- Codewars Link: https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
// --- Title: WeIrD StRiNg CaSe
// --- Kyu: 6 kyu
// --- Date Solved: 10/28/25

/*
P: string
R: return same string, with even indexed characters uppercased and odd lowercased
E:
P: split string into array, loop through each element, if index is even upper, if odd lower then join
*/

// --- My Solution:
function toWeirdCase(string){
  let str = string.split('')
  
  let arr = []
  
  let j = 0
  
  for(let i = 0 ; i < str.length;i++){
    if(str[i] === ' '){
      j = 0
      arr.push(str[i])
    }
    else if(j % 2 === 0 || j === 0){
      arr.push(str[i].toUpperCase())
      j++
    }
    else if(j % 2 !== 0 || j !== 0){
      arr.push(str[i].toLowerCase())
      j++
    }
    
  }
  return arr.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Incrementing and indexes
Specific Note: used gpt for a hint, my logic was just different, I came up with a counter myself though.
Key Learning/Reinforcement: reseting a counter and conditionals in a loop
*/

//Alternative Solution Link: 
