// --- Codewars Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// --- Title: First non-repeating character
// --- Kyu: 5 kyu
// --- Date Solved: 11/2/25

/*
P: s = string
R: return first char thats no repeated anywhere in string
E: test -> e : because e is first char not repeated
P:
possible patterns = hash map
make a count for each character
if first property of obj count = 0 then return the charc
*/

// --- My Solution:
function firstNonRepeatingLetter(s) {
  let obj = {};

  for (let letter of s) {
    let lower = letter.toLowerCase();
    obj[lower] = (obj[lower] || 0) + 1;
  }

  for (let letter of s) {
    if (obj[letter.toLowerCase()] === 1) return letter;
  }

  return '';
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: uppercase and lowercase tests
Specific Note: gpt helped me
Key Learning/Reinforcement: creating an object and using obj[key] = (obj[key] || 0) + 1 to add a value to the keys of the obj
*/

//Alternative Solution Link: 
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
