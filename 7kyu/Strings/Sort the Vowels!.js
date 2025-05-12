// --- Codewars Link: https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript
// --- Title: Sort the Vowels!
// --- Kyu: 7 kyu
// --- Date Solved: 5/12/25

/*
P: s = string
R: sort vowels in special format
E:
P: Loop through string, if element is a vowel put before | if not after | then add \n to each
*/

// --- My Solution:
function sortVowels(s) {
  
  if(typeof s !== 'string') return ''
  
  let arr = s.split('')
    
  let lines = [];

  for (let i = 0; i < arr.length; i++) {
    if ('aeiouAEIOU'.includes(arr[i])) {
    lines.push(`|${arr[i]}`);
    } else {
    lines.push(`${arr[i]}|`);
    }
}

return lines.join('\n');

}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: \n for new lines and using on arrays, how to not exit loop after first iteration
Specific Note: Didn't know how to return element on a vew line
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
const sortVowels = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');
