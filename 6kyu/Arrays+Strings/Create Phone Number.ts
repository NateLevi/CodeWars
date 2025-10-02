// --- Codewars Link: 
// --- Title: Create Phone Number
// --- Kyu: 6 kyu
// --- Date Solved: 10/2/25

/*
P: array of 10 integers (0-9)
R: string of these numbers in phone number form
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
P:
- Splice array inserting ( , ) , - to specific indexes of the array, then join
- Loop through and use a temperal literal with index positions
*/

// --- My Solution:
function createPhoneNumber(numbers){
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");
  
  return numbers.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Splice mutates the original array, just inserting is
.splice(insert,delete,item)
*/

//Alternative Solution Link: 
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
