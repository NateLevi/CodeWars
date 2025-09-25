// --- Codewars Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// --- Title: Two Sum
// --- Kyu: 6 kyu
// --- Date Solved: 9/25/25

/*
P: numbers = array of nums, target = target num
R: find two nums in array that when added together give target, then return in a list with index's
E:
P: 2 loops. First loop stays at first element and 2nd loop loops through rest of array adding to first till = target, then
return the indexs of both
*/

// --- My Solution:
function twoSum(numbers, target) {
  
  let indexs = []
  
  for(let i=0; i < numbers.length;i++){
    for(let j=1; j < numbers.length;j++){
      if(numbers[i] + numbers[j] === target){
        indexs.push(i,j)
      }
    }
  }
  return indexs
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: understanding nesting loops
Specific Note: 
Key Learning/Reinforcement: You can push more then one piece of data using .push() method
*/

//Alternative Solution Link: 
