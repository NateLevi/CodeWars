// --- Codewars Link: https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript
// --- Title: Image host filename generator
// --- Kyu: 6 kyu
// --- Date Solved: 11/20/25
// --- My Solution:
function generateName() {
  function generateLetters() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      let base = Math.random() < 0.5 ? 65 : 97;
      let randomNumber = base + Math.floor(Math.random() * 26);
      arr.push(String.fromCharCode(randomNumber));
    }
    return arr.join("");
  }

  let saved;
  do {
    saved = generateLetters();
  } while (photoManager.nameExists(saved));

  return saved;
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: do while, nested function, random ASCII generator 
Specific Note: used gpt, but understood logic, forgot about do while
Key Learning/Reinforcement: nested function, do while, math.random
*/

//Alternative Solution Link: 
