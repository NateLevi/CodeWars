
// --- Codewars Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// --- Title: Categorize New Member.js
// --- Kyu: 7 kyu
// --- Date Solved: 7/24/25

/*
P: list of number pairs, persons age and handicap
R: array based on index position and "Open" or "Senior"
E:[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] -> ["Open", "Open", "Senior", "Open", "Open", "Senior"]
P: 
*/

// --- My Solution:
function openOrSenior(data){
  
  let arr = []
  
  for(let i=0; i < data.length;i++){
    
    if(data[i][0] >= 55 && data[i][1] > 7){
      arr.push("Senior")
    }
    else{
      arr.push("Open")
    }
  }
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Not to hard just figuring out nested arrays
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//OR

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
