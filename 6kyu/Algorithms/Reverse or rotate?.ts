// --- Codewars Link: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
// --- Title: Reverse or rotate?
// --- Kyu: 6 kyu
// --- Date Solved: 11/7/25

/*
P: str = string of digits
R: cut the string into chunks based on sz = size, if sum of chunk digits is divisble by 2 reverse the chunk otherwise 
rotate it to left by 1, put together then return result as a string
E:("123456987654", 6) --> "234561876549"
P: 
Get every possibility of chunks by looping through str, get the sum of each chunk, if % 2 then reverse chunk otherwise
move it to the left
*/

// --- My Solution:
function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) return ""

  let arr = str.split('')
  let chunks = []

  for (let i = 0; i < arr.length; i += sz) {
    let chunk = arr.slice(i, i + sz)
    if (chunk.length < sz) continue

    let sum = chunk.map(Number).reduce((acc, cur) => acc + cur, 0)

    if (sum % 2 === 0) {
      chunks.push(chunk.reverse())
    } else {
      chunk.push(chunk.shift())
      chunks.push(chunk)
    }
  }

  return chunks.flat().join('')
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: for loop, flat, slicing
Specific Note: used gpt for small errors
Key Learning/Reinforcement: changing up the for i loop
*/

//Alternative Solution Link: 
