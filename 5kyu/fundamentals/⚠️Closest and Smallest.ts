// --- Codewars Link: https://www.codewars.com/kata/5868b2de442e3fb2bb000119/train/javascript
// --- Title: Closest and Smallest
// --- Kyu: 5 kyu
// --- Date Solved: 12/3/25

// --- My Solution:
function closest(strng) {
  if (strng.length === 0) return [];

  let nums = strng.split(' ').map(e => e.split('').map(Number));
  let weights = nums.map(e => e.reduce((acc, cur) => acc + cur, 0));

  let arr = [];
  for (let i = 0; i < weights.length; i++) {
    arr.push([weights[i], i, Number(nums[i].join(''))]);
  }

  let sortedWeights = arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let diffArr = [];

  for (let i = 0; i < sortedWeights.length; i++) {

    if (i > 0) {
      let diff = sortedWeights[i][0] - sortedWeights[i - 1][0];
      diffArr.push([diff, i - 1, i]);
    }

    if (i < sortedWeights.length - 1) {
      let diff = sortedWeights[i + 1][0] - sortedWeights[i][0];
      diffArr.push([diff, i, i + 1]);
    }
  }

  diffArr.sort((a, b) => a[0] - b[0]);

  let smallestPair = diffArr[0];
  let leftIdx = smallestPair[1];
  let rightIdx = smallestPair[2];

  return [
    sortedWeights[leftIdx],
    sortedWeights[rightIdx]
  ];
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: question, sorting
Specific Note: used gpt, struggled with this one, uderstand the logic, tough to understand the question, gpt helped with that, 
Key Learning/Reinforcement: can't iterate over numbers in js, you can use conditionals in .sort method, masking triplets in js with arrays
*/

//Alternative Solution Link: 
