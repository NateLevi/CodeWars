// --- Codewars Link: https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript
// --- Title: Paul's Misery
// --- Kyu: 7 kyu
// --- Date Solved: 5/9/25

/*
P: x = array of strings
R: a string sentence based on strings passed through x representing numbers
E: (['life', 'eating', 'life']), 'Super happy!');
P: Loop through x array, accumulate total by value of each word
*/

// --- My Solution:
function paul(x) {
  let total = x.reduce((a, c) => {
    return c === "kata" ? a + 5 :
           c === "eating" ? a + 1 :
           c === "Petes kata" ? a + 10 :
           a;
  }, 0);

  if (total < 40) {
    return 'Super happy!';
  } else if (total >= 40 && total < 70) {
    return 'Happy!';
  } else if (total >= 70 && total < 100) {
    return 'Sad!';
  } else {
    return 'Miserable!';
  }
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out the ternary operator exact syntax using reduce and what to return if none of those apply. 
Specific Note: forgot the return inside reduce also. I tried to set the strings as keys in a object but it didn't like the space in Petes kata, but from solutions I see that you would put '' around the word.
Key Learning/Reinforcement: chaining ternary operators

Alternative Solution Link: 
function paul(activities) {
  const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
  const score = activities.reduce((s, a) => s + VALUES[a], 0);
  switch (true) {
    case score < 40: return 'Super happy!';
    case score < 70: return 'Happy!';
    case score < 100: return 'Sad!';
    default: return 'Miserable!';
  }
}
Review Notes: 
*/
