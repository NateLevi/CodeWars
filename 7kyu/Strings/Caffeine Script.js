// --- Codewars Link: https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript
// --- Title: Caffeine Script
// --- Kyu: 7 kyu
// --- Date Solved: 7/6/25

/*
P: non-zero integer
R: string if n is divisible by _
E: 1   -->  "mocha_missing!"
P: 
*/
// --- My Solution:
function caffeineBuzz(n) {
  let result = "";

  if (n % 3 === 0 && n % 4 === 0) {
    result = "Coffee";
  } else if (n % 3 === 0) {
    result = "Java";
  }

  if (result && n % 2 === 0) {
    result += "Script";
  }

  return result || "mocha_missing!";
}

/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: I used chatgpt because I got lazy to write it all out
Key Learning/Reinforcement: assigning a variable inside of conditionals
*/

//Alternative Solution Link: 
function caffeineBuzz(n){
  var str = "mocha_missing!";
  if(n%3==0){
    if(n%4==0){
      str = "Coffee";
    }else{
      str = "Java";
    }
    if(n%2==0){
      str = str + "Script";
    }
  }
  return str;
}
