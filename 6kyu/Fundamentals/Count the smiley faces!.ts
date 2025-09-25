// --- Codewars Link: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// --- Title: Count the smiley faces!
// --- Kyu: 6 kyu
// --- Date Solved: 9/25/25

/*
P: array
R: return total number of smiling faces
E: 
P: loop through each element
*/

// --- My Solution:
function countSmileys(arr) {
  if(arr.length === 0){
    return 0
  }
  const obj = {
    ":)": 0, ":D": 0,
    ";)": 0, ";D": 0,
    ":-)": 0, ":-D": 0,
    ";-)" : 0, ";-D": 0,
    ":~)": 0, ":~D": 0,
    ";~)": 0, ";~D": 0
  };
  
  for(let i=0; i < arr.length;i++){
      for(let face in obj){
        if(arr[i] === face){
          obj[face]++
        }
      }
  }
  return Object.values(obj).reduce((acc,cur) => acc + cur,0)
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: question understanding
Specific Note: 
Key Learning/Reinforcement: using ++ and for in loop on object
*/

//Alternative Solution Link: 
function countSmileys(arr) {
var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
var count = 0;

for (var i=0; i<arr.length; i++){
  for (var j=0; j<smileys.length; j++){
    if (arr[i]===smileys[j]){
      count++;
    }
  }
  }
return count;
}
