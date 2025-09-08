// --- Codewars Link: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// --- Title: Are they the "same"?
// --- Kyu: 6 kyu
// --- Date Solved: 9/8/25

/*
P: two arrays
R: if the elements in array b are the elements in a squared then return true else false
E: a = [121, 144, 19, 161, 19, 144, 19, 11]  b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] true
P: loop through b, if element is a element squared then return true
*/

// Check how many times element occurs in a, then check if b elements have the same amount as a but squared

// --- My Solution:
function comp(array1, array2){
  
  if (!array1 || !array2 || array1.length !== array2.length ) {
    return false;
  }
  
  let obj = {}
  
  
  for(let i=0; i < array1.length; i++){
    obj[array1[i]] = [0,0]
  }
  
  for (let i = 0; i < array1.length; i++) {
    let key = array1[i];
    if (key in obj) {
      obj[key][0] += 1
    }
  }
  
  for (let i=0 ; i < array2.length;i++){
    for(let key in obj){
      if(Math.sqrt(array2[i]) === Number(key)){
        obj[key][1] += 1
      }
    }
  }
  for (let key in obj) {
    if (obj[key][0] !== obj[key][1]) {
      return false;
    }
  }

  return true;
}
/*
--- Reflection & Struggle ---
Primary Struggle Tag: Understanding the problem and thinking through using objects
Specific Note: used gpt to help breakdown question and understand better, and then used to fix code at the end. But overall did most of the work with objects
Key Learning/Reinforcement: Setting arrays as properties values in a object, accessing that array, also using Math.sqrt method
*/

//Alternative Solution Link: 
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
