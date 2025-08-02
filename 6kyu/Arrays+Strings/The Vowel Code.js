// --- Codewars Link: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// --- Title: The Vowel Code
// --- Kyu: 6 kyu
// --- Date Solved: 8/2/25

/*
P: 
string of letters
R:
replace all lowercase vowels in string to numbers then back
E:
P:
create object of vowel letters to numbers, loop through string, if element contains a property from object return the key
*/

// --- My Solution:
function encode(string) {
  let vowels = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  }
  return string.split('').map(e => (e.toLowerCase() in vowels ? vowels[e.toLowerCase()] : e)).join('')
  }
function decode(string) {
  const reverseVowels = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
}
  return string.split('').map(e => (e.toLowerCase() in reverseVowels ? reverseVowels[e.toLowerCase()] : e)).join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out using map method and seeing if element is in the properties of vowels
Specific Note: I used chatgpt to help. 
Key Learning/Reinforcement: using the in statement returns a boolean if the element is in the properties
of the object. And also using obj[] brackets returns the value of the property
*/

//Alternative Solution Link: 

// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
