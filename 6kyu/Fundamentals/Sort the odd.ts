// --- Codewars Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// --- Title: Sort the odd
// --- Kyu: 6 kyu
// --- Date Solved: 9/9/25

/*
P: array of numbers
R: that array sored by odd numbers in ascending order but even number stays same spot
E: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
P: remove even numbers with there index. Then sort ascending odd, then add even numbers back to index
*/

// --- My Solution:
function sortArray(array) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push([i, array[i]]); // [index, value]
    } else {
      odds.push(array[i]);
    }
  }

  odds.sort((a, b) => a - b);


  for (let val of evens) {
    odds.splice(val[0], 0, val[1]);
  }

  return odds;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Couldn't use a for in loop on obj because it auto sorts numerically, had to use an array instead of obj for the evens.
Specific Note: used gpt to check my answer but overall did the logic myself
Key Learning/Reinforcement: you can use destructing in a for of loop like for (let [idx, val] of evens), for in loop auto sorts the properties by numeric value
*/

//Alternative Solution Link:
//Clever
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
//
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
}
