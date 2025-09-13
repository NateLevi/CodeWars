// --- Codewars Link: https://www.codewars.com/kata/5202ef17a402dd033c000009/solutions/javascript
// --- Title: Title Case
// --- Kyu: 6 kyu
// --- Date Solved: 9/13/25

// --- My Solution:
function titleCase(title, minorWords) {
  if (title.length === 0) return "";

  let words = title.toLowerCase().split(" ");
  let minWords = minorWords ? minorWords.toLowerCase().split(" ") : [];

  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (i === 0 || !minWords.includes(words[i])) {
      arr.push(words[i][0].toUpperCase() + words[i].slice(1));
    } else {
      arr.push(words[i]);
    }
  }

  return arr.join(" ");
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: I struggled with this one, my brain wasn't braining for this one
Specific Note: 
Key Learning/Reinforcement: using slice, using .includes
*/
