// --- Codewars Link: https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript
// --- Title: Dominant array elements
// --- Kyu: 7 kyu
// --- Date Solved: 6/27/25

/*
P: array of numbers
R: return list of all dominant elements (An element in an array is dominant if it is greater than all elements to its right )
E: solve([1,21,4,7,5]) = [21,7,5]
P:
*/

// --- My Solution:
function solve(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDominant = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isDominant = false;
        break;
      }
    }

    if (isDominant) {
      result.push(arr[i]);
    }
  }

  return result;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: Struggled with figuring out how to check all elemnts after the current i. I used
Chatgpt for hints and it suggested setting a flag (boolean) to tell if number is greater or not. 
Then if the flag is true then push the number to an array. 
Key Learning/Reinforcement: What a flag is in js. changing the let j = to i + 1. 
*/

//Alternative Solution Link: 
function solve(arr){
  return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
};
