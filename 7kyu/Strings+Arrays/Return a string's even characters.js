// --- Codewars Link: https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
// --- Title: Return a string's even characters.

// --- Kyu: 7 kyu
// --- Date Solved: 5/6/25

/*
P: string of letters
R: array of all even chars from a string, if smaller then two characters or longer then 100 return "invalid string"
E: "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
P:
*/

// --- My Solution:
function evenChars(string) {
  if(string.length < 2 || string.length > 100){
    return "invalid string"
  }
  
  return string.split('').filter((e,i) => i % 2 !== 0 ) 
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: map vs filter usage
Specific Note: Used map first but that wouldn't work because i needed if false return or to remove the elements that weren't odd, filter did that by filtering out the odd index elements
Key Learning/Reinforcement: if using conditional in map there must be a false return 

Alternative Solution Link: 

const evenChars = string =>
  string.length < 2 || string.length > 100 ? `invalid string` : [...string].filter((_, idx) => idx % 2);

Review Notes: 
*/
