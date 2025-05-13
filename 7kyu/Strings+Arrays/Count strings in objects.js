// --- Codewars Link: https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
// --- Title: Count strings in objects
// --- Kyu: 7 kyu
// --- Date Solved: 5/13/25

/*
P: obj = list of key/value pairs
R: count of keys with a string value
E: 
P:
*/

// --- My Solution:
function strCount(obj) {

  let count = 0;

  function recurse(value) {
    if (typeof value === 'string') {
      count++;
    } else if (Array.isArray(value)) {
      for (let item of value) {
        recurse(item);
      }
    } else if (value && typeof value === 'object') {
      for (let key in value) {
        recurse(value[key]);
      }
    }
  }

  recurse(obj);
  return count;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: recursion, looping through objects, keys and values
Specific Note: Used chatgpt and it gave me recursion. I wouldn't have thought of recursion as a solution,first time
getting exposed to it in codewars. I did it with loops but I didn't realize the arrays in the values could be nested
or there could be objects. Recursion allows for you to pass the obj into a function, have a base case where it tests
the obj and keeps using that function to add to the count, then it returns
Key Learning/Reinforcement: recursion use case, looping through a objs key value
*/

//Alternative Solution Link: 

function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}
