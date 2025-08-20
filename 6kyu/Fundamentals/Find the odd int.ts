// --- Codewars Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// --- Title: Find the odd int
// --- Kyu: 6 kyu
// --- Date Solved: 8/20/25

/*
P: array of integers 
R: return integers that appear an odd number of times
E: [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4
P: count an element each time when looping, then return the element that occurs odd
create an object with the keys as the unique elements and the values as how many times it occurs
*/

// --- My Solution:
function findOdd(A) {
  let unique = [...new Set(A)]
  
  const values = {}
  
  for (let i = 0; i < unique.length; i++) {
  values[unique[i]] = 0;
}
  
  for (let i = 0; i < A.length; i++) {
    values[A[i]] += 1
}
  
  for (let key in values){
    if(values[key] % 2 !== 0){
      return Number(key)
    }
  }
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out object syntax, how to add keys/values to an empty object, looping through array to add to an object
Specific Note: Did well, I was close, but used gpt about 20-25 min in, but I would say I got it correct, it was just the object syntax
Key Learning/Reinforcement: Adding to objects using loops, using for in loop to loop over keys of an object, setting unique values with new/Set
*/

//Alternative Solution Link: 
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}
