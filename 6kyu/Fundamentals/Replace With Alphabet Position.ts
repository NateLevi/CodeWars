// --- Codewars Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// --- Title: Replace With Alphabet Position
// --- Kyu: 6 kyu
// --- Date Solved: 9/4/25

/*
P: text = string
R: replace every letter with position in alphabet
E: "a" = 1
P:
*/

// --- My Solution:
function alphabetPosition(text) {
  let letters = text.split('')
  const regex = /^[A-Za-z]$/;
  return letters.map(letter => regex.test(letter) ? ((letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1)) : null).filter(Number).join(' ')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: Used gpt for alphabet ascii conversion and also regex for letters. 
Key Learning/Reinforcement: regex for all lower and upper case letters is [A-Za-z], charCodeAt returns ASCII position for letters, you can use just Number in .filter
*/

//Alternative Solution Link: 
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

