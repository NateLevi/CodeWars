// --- Codewars Link: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
// --- Title: Pick peaks
// --- Kyu: 5 kyu
// --- Date Solved: 12/17/25

/*
P:
R: returns an object with array props pos and peaks, positions and values of the peaks of arr
E:
P: first and last element have to be the same
find the max between the first and last
if max count > 1 then return first index of that max

*/

// --- My Solution:
function pickPeaks(arr){
  let obj = {
    pos: [],
    peaks: []
  }
  let peakIndex = null
  
  for(let i = 1; i < arr.length;i++){
    if(arr[i] > arr[i - 1]){
      peakIndex = i
    }
    else if(arr[i] < arr[i - 1] && peakIndex !== null){
      obj.pos.push(peakIndex)
      obj.peaks.push(arr[peakIndex])
      peakIndex = null
    }
  }
  return obj
}

/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: traversing an array, problem understanding
Specific Note: created an obj, looped through the array, check for a peak, push that peak, reset, then keep running that loop
Key Learning/Reinforcement: You can push to properties that have arrays with dot notation like obj.peaks.push()
*/

//Alternative Solution Link: 
