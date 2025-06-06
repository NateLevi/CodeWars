// --- Codewars Link: https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript
// --- Title: Find all non-consecutive numbers
// --- Kyu: 7 kyu
// --- Date Solved: 6/6/25

/*
P: array of numbers
R: return array of objects with index and non-consecutive num
E:[
  {i: 4, n:6},
  {i: 7, n:15}
  ]
P: loop through the array test whether the next element is one larger, if not then extract that element and return into object
*/

// --- My Solution:
function allNonConsecutive (arr) {
  
  let array = []
  
  for(let j=0 ; j < arr.length - 1 ; j++){
    if(arr[j + 1] !== arr[j] + 1){
      
      array.push({ i: j + 1, n: arr[j + 1] });
      
    }
  }
  return array
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out how to make an object in an array. I thought it was the 
other way around first. 
Specific Note: Used chatgpt for hint, got stuck on the i: j + 1
Key Learning/Reinforcement: pushing objects to an array.
*/

//Alternative Solution Link: 
function allNonConsecutive(arr) {
  var newArr = [];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      newArr.push({ i: i, n: arr[i] });
    }
  }
  return newArr;
}
