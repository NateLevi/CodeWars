// --- Codewars Link: https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
// --- Title: Sorted? yes? no? how?
// --- Kyu: 7 kyu
// --- Date Solved: 7/6/25

/*
P: array of integers
R: yes, ascending. yes, descending or no
E: ([1, 2], 'yes, ascending')
P: create a copy sorted ascending and decending and compare.
*/

// --- My Solution:
function isSortedAndHow(array) {
    
  let ascend = [...array].sort((a,b)=> a - b)
  let descend = [...array].sort((a,b)=> b - a)
  
  if(array.every((e,i)=> e === ascend[i])){
    return "yes, ascending"
  }
  else if(array.every((e,i)=> e === descend[i])){
    return "yes, descending"
  }
  else{
    return "no"
  }

}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: learned array comparing and mutation process of sort
Specific Note: 
Key Learning/Reinforcement: the sort method mutates the original array and using a spread
operator creates a copy of the array. Also to compare array you can't directly do === you have
to use a method like .every to compare each element
*/

//Alternative Solution Link: 
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
