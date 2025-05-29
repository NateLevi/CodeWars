// --- Codewars Link: https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript
// --- Title: Name Array Capping

// --- Kyu: 7 kyu
// --- Date Solved: 5/29/25

/*
P: names = array of strings 
R: return array of each string with its first letter capitalized and remainder in lowercase
E: ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
P: 
*/

// --- My Solution:
function capMe(names) {
  
  let arr = []
  
  for(let i=0; i < names.length; i++){
    
    arr.push(`${names[i][0].toUpperCase() + names[i].slice(1,names[i].length).toLowerCase()}`)
    
  }
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: going into an array and changing it
Specific Note: Wasn't to difficult but I had to think of how to loop through each element and create a new array, could have used map
Key Learning/Reinforcement: slicing into an element of the array
*/

//Alternative Solution Link: 
function capMe(names) {
  return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}
