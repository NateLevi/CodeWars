// --- Codewars Link: https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript
// --- Title: Fix My Phone Numbers!
// --- Kyu: 7 kyu
// --- Date Solved: 5/10/25

/*
P: str = phone number strings with 11 digits but random characters, whitespace added
R: Decide if string contains 11 digits and starts with 0. return corrected phone number or 'Not a phone number'
E: "\S:)0207ERGQREG88349F82!efRF)", "02078834982"
P: Filter out the non-numbers, if new string starts with 0 then return it else return NOt a phone number
*/

// --- My Solution:
function isItANum(str) { 
  let newStr = str.split('').filter((e) => !/[^0-9]/.test(e)).join('')
  
  if (newStr.startsWith('0') && newStr.length === 11){
    return newStr
  }
  else{
    return "Not a phone number"
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: syntax of regex and using filter with .test, and spliting str for filter to work (because it only works on arrays)
Specific Note: 
Key Learning/Reinforcement: regex syntax

Alternative Solution Link: 
function isItANum(str) {
  
  let number = str.replace(/\D/g,'');
  
  if (number[0] !== '0' || number.length !== 11) {
    return "Not a phone number";
  }

  return number;
}
Review Notes: 
*/
