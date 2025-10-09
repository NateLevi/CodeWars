// --- Codewars Link: https://www.codewars.com/kata/5f6d120d40b1c900327b7e22/train/javascript
// --- Title: Leaderboard climbers
// --- Kyu: 6 kyu
// --- Date Solved: 10/9/25

// --- My Solution:
function leaderboardSort(leaderboard, changes) {
  const names = changes.map(e => e.match(/[A-Za-z]+/)[0]);

  for (let i = 0; i < changes.length; i++) {
    const amount = Number(changes[i].match(/[-+]?\d+/)[0]);
    const from = leaderboard.indexOf(names[i]);
    const to = from - amount; 

    const [element] = leaderboard.splice(from, 1);

    leaderboard.splice(to, 0, element);
  }

  return leaderboard;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: regex, splicing, indexes
Specific Note: used gpt for index understanding. My brain couldn't understand grabing the index of another array through another array element, but overall i
understood the code
Key Learning/Reinforcement: using index of method, splicing by setting variables to the removed and added.
*/

//Alternative Solution Link: 
