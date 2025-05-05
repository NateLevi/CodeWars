// --- Codewars Link: https://www.codewars.com/kata/57e92812750fcc051800004d/train/javascript
// --- Title: Holiday VII - Local Talk
// --- Kyu: 7 kyu
// --- Date Solved: 5/5/2025


function pak(s){
  let arr = [...s]
  
  if(!arr.some(char => /[a-zA-Z]/.test(char))){
    return ''
  }
  
  for(let i=0; i < arr.length; i++){
    
    if(arr[i] === ' '){
      arr.splice(i,1,' pak ')
    }
    
  }
  return arr.join('')
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out when what's passed in is empty or filled with spaces, what to return
Specific Note: 
Key Learning/Reinforcement: using splice within a for loop on a variable/array changes the array 

Alternative Solution: 

const pak = s =>
  s.trim().split(` `).join(` pak `);

Review Notes: 
*/
