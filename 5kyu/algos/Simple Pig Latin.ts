// --- Codewars Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// --- Title: Simple Pig Latin
// --- Kyu: 5 kyu
// --- Date Solved: 11/2/25

/*
P: string sentence
R: string sentence but each words first letter is pushed to its end and "ay" is added
E: pigIt('Hello world !');     // elloHay orldway !
P: split the sentence by words, grab the first element of each word, move it to the end of that word, then add ay and 
then join them again
*/

// --- My Solution:
function pigIt(str) {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {

    if (/[^\w\s]/.test(words[i])) {
      continue;
    }

    let chars = words[i].split('');
    let first = chars.shift();
    chars.push(first);
    chars.push('a');
    chars.push('y');
    words[i] = chars.join('');
  }

  return words.join(' ');
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: regex, spliting arrays logic
Specific Note: used gpt to fix logical issue, but overall wrote myself
Key Learning/Reinforcement: spliting arrays and shifting/pushing to rejoin
*/

//Alternative Solution Link: 
