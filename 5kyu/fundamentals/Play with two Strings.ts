// --- Codewars Link: https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript
// --- Title: Play with two Strings
// --- Kyu: 5 kyu
// --- Date Solved: 11/4/25

// --- My Solution:
function workOnStrings(a, b) {
  
  function toggleCase(char) {
    return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }

  // --- a) swap the case of b based on a ---
  let lettersA = {};
  let bSplit = b.split('');
  for (let letter of a) {
    let lower = letter.toLowerCase();
    lettersA[lower] = (lettersA[lower] || 0) + 1;
  }

  let newB = [];
  for (let i = 0; i < bSplit.length; i++) {
    let str = bSplit[i];
    let lower = str.toLowerCase();

    if (lettersA[lower]) {
      for (let j = 0; j < lettersA[lower]; j++) {
        str = toggleCase(str);
      }
    }
    newB.push(str);
  }

  // --- b) swap the case of a based on b ---
  let lettersB = {};
  let aSplit = a.split('');
  for (let letter of b) {
    let lower = letter.toLowerCase();
    lettersB[lower] = (lettersB[lower] || 0) + 1;
  }

  let newA = [];
  for (let i = 0; i < aSplit.length; i++) {
    let str = aSplit[i];
    let lower = str.toLowerCase();

    if (lettersB[lower]) {
      for (let j = 0; j < lettersB[lower]; j++) {
        str = toggleCase(str);
      }
    }
    newA.push(str);
  }

  return newA.join('') + newB.join('');
}

/*

// My Complexity:
O(n x m)

--- Reflection & Struggle ---

Primary Struggle Tag: looping correctly, scoped variables, comparing case sensitivity
Specific Note: used gpt for help but wrote most of the logic, what i missed was the case insensitivity
Key Learning/Reinforcement: lowercase and uppercase methods don't mutate the original value, creating a helper function to solve problem. 
*/

//Alternative Solution Link: 
