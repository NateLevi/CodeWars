// --- Codewars Link: https://www.codewars.com/kata/5822d89270ca28c85c0000f3
// --- Title: String Scramble
// --- Kyu: 7 kyu
// --- Date Solved: 05 - 03 - 25

/*
P: str = string arr = array of indices 
R: return new string with rearranged characters by index of arr
E: 'halo' -> [1,3,0,2] = lhoa
P: Create a new string where each letter is the indexed letter
*/

// --- My Solution:

function scramble(str, arr) {
  let result = []
  
  for(let i=0; i < arr.length; i++){
    result[arr[i]]= str[i]
  }
  
  return result.join('')
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: Index thinking and empty arrays
Specific Note: Didn't know javascript creates spaces in an array and you can assign elements to an empty arrays position. 
Key Learning/Reinforcement: Not too dificult, just learned something new about javascript arrays. 

Alternative Solution Link: https://www.codewars.com/kata/solution-id-here (e.g. one using filter/reduce)

Review Notes: Doesn't need frequent review.
*/
