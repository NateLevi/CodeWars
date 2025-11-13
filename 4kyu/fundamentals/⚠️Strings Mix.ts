// --- Codewars Link: https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
// --- Title: Strings Mix
// --- Kyu: 4 kyu
// --- Date Solved: 11/13/25

/*
P: strings
R: string where each lowercase letters of s1/s2 appear as many times as maximum 
E:
P: count freqeuency of each lowercase letters, maximum, not consider letters when max is <= 1
loop through strings, add each letter to an object with the count of occurences, compare both to see which s has the
highest amount and return prefix combination, if their equal then use =: instead of the count
*/

// --- My Solution:
function mix(s1, s2) {
  let s1obj = {}
  let s2obj = {}

  for (let letter of s1) {
    if (letter >= 'a' && letter <= 'z') {
      s1obj[letter] = (s1obj[letter] || 0) + 1
    }
  }

  for (let letter of s2) {
    if (letter >= 'a' && letter <= 'z') {
      s2obj[letter] = (s2obj[letter] || 0) + 1
    }
  }

  let keys = new Set([...Object.keys(s1obj), ...Object.keys(s2obj)])
  let arr = []

  for (let char of keys) {
    let c1 = s1obj[char] || 0
    let c2 = s2obj[char] || 0
    let max = Math.max(c1, c2)

    if (max <= 1) continue

    if (c1 > c2) arr.push(["1:", char.repeat(c1)])
    else if (c2 > c1) arr.push(["2:", char.repeat(c2)])
    else arr.push(["=:", char.repeat(max)])
  }

  
  const order = { "1:": 0, "2:": 1, "=:": 2 }

  arr.sort((a, b) => {
    
    if (b[1].length !== a[1].length) return b[1].length - a[1].length

    
    if (order[a[0]] !== order[b[0]]) return order[a[0]] - order[b[0]]

    return a[1].localeCompare(b[1])
  })

  return arr.map(e => e[0] + e[1]).join('/')
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: objects, looping keys/values in obj, sort order 
Specific Note: used gpt to help me, my logic originally had nested loop, but my logic was close
to the solution, I just had to combine the objects and find unique keys then compare
Key Learning/Reinforcement: you can use > or < on a string to test its unicode position, you can
create your own order while sorting with a object prefix
*/

//Alternative Solution Link: 
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}
