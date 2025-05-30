// --- Codewars Link: https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript
// --- Title: Russianpostalcodechecker
// --- Kyu: 7 kyu
// --- Date Solved: 5/30/25

/*
P: postcode = string
R: return t/f if string is a valid postal code thats 6 digits, no space,
E: '198328' -> true
P:
*/

// --- My Solution:
function zipvalidate(postcode){
  let nums = "05789"
  
  if (postcode.length === 6 && !postcode.includes(' ') && !/[05789]/.test(postcode[0]) && /^\d+$/.test(postcode)){
    return true
  }
  else{
    return false
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: reading slowly to understand and regex syntax
Specific Note: 
Key Learning/Reinforcement: The syntax is simple to test for regex /[0123]/.test
*/

//Alternative Solution Link: 
function zipvalidate(postcode){
  return /^[12346]\d{5}$/.test(postcode)
}//z.
