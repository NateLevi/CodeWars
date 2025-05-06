// --- Codewars Link: https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript
// --- Title: For the sake of argument
// --- Kyu: 7 kyu
// --- Date Solved: 5/6/2025

/*
P: list of values
R: true or false if all params are numbers
E: numbers(1, 4, 3, 2, 5); // true
P: pack into array, loop through if num return true if not false
*/

// --- My Solution:

function numbers(...params){
  
  return params.every(num => typeof num === "number")
    
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: packing params into array
Specific Note: I used regex with test orginally but type of seemed to work better
Key Learning/Reinforcement: using every with typeof and packing items into an array. I also learned that putting the rest operator before the parameter changes the actually argument

*/
