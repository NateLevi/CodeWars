// --- Codewars Link: https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
// --- Title: Function Cache
// --- Kyu: 5 kyu
// --- Date Solved: 11/19/25

// --- My Solution:
function cache(func) {
  const cacheObj = {}

  return function(...args) {
    const key = JSON.stringify(args)

    if (key in cacheObj) {
      return cacheObj[key]
    }

    const result = func(...args)
    cacheObj[key] = result
    return result
  }
}
/*

--- Reflection & Struggle ---

Primary Struggle Tag: Caching, functional programming, objects, 
Specific Note: used gpt for help to understand
Key Learning/Reinforcement: Learned what caching was, in js you can cache function results in an object, scopping location importance, you can't set keys of a js 
object to anything other then a string you have to change to a json string
*/

//Alternative Solution Link: 
