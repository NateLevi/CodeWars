// --- Codewars Link: https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript
// --- Title: Framed Reflection
// --- Kyu: 6 kyu
// --- Date Solved: 8/13/25

/*
P: string of letters and characters
R: text reveresed and surrounded by *'s
E: 
*/

// --- My Solution:

function mirror(text){

  let words = text.split(' ').map(w => w.split('').reverse().join(''))
  
  let longest = Math.max(...words.map(w => w.length));
  
  let topStars = '*'.repeat(longest + 4);
  
  let lines = words.map(w => `* ${w.padEnd(longest, ' ')} *`).join('\n');
  
  return `${topStars}\n${lines}\n${topStars}`;
  
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: using repeat, using line breaks \n and temperal literals, mapping through arrays
Specific Note: 
Key Learning/Reinforcement: learned about padend. A method that fills an element with a character according to a 
length passed in like padEnd(length,' ')
*/

//Alternative Solution Link: 
