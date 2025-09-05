// --- Codewars Link: 
// --- Title: Equal Sides Of An Array
// --- Kyu: 6 kyu
// --- Date Solved: 

/*
P: array of integers
R: find index where sum of integers to left of N is equal to sum of integers to the right
E: 
P:Loop through add, have a total/acc and add the left elements to a counter and right
*/

// --- My Solution:
function findEvenIndex(arr) {
  let leftTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightTotal = arr.slice(i + 1).reduce((a, c) => a + c, 0);

    if (leftTotal === rightTotal) {
      return i;
    }

    leftTotal += arr[i];
  }

  return -1;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out the total increments while looping through array
Specific Note: used gpt for help but thought through it using splice to get right total
Key Learning/Reinforcement: 
*/


//Alternative Solution Link: 
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
