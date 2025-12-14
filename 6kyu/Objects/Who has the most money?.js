// --- Codewars Link: https://www.codewars.com/kata/528d36d7cc451cd7e4000339/solutions/javascript
// --- Title: Who has the most money?
// --- Kyu: 6 kyu
// --- Date Solved: 12/14/25

// --- My Solution:
function mostMoney(students) {
  if (students.length === 1) return students[0].name;

  let totals = {};

  for (let i = 0; i < students.length; i++) {
    let total =
      students[i].fives * 5 +
      students[i].tens * 10 +
      students[i].twenties * 20;

    totals[students[i].name] = total;
  }

  let max = -Infinity;
  let namey = '';
  let ties = 0;

  for (let person in totals) {
    if (totals[person] > max) {
      max = totals[person];
      namey = person;
      ties = 1;
    } else if (totals[person] === max) {
      ties++;
    }
  }

  return ties === students.length ? 'all' : namey;
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: objects, classes, arguments
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
