// --- Codewars Link: https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript
// --- Title: Slaphead
// --- Kyu: 7 kyu
// --- Date Solved: 5/28/25

/*
P: x = string clean head = "-" stray hair = "/"
R: if x has a stray hair remove it and return a word based on hairs counted
E: 
P: Loop through string, if the current element = '/' add 1 to a variable and then remove that element
*/

// --- My Solution:
function bald(x){
  
  let arr = x.split('')
  let count = 0
  
  for (let i = 0 ; i < arr.length; i++){
    if(arr[i] === "/"){
      count += 1
    }
  }
  let word;
count === 0 && (word = "Clean!");
count === 1 && (word = "Unicorn!");
count === 2 && (word = "Homer!"); 
(count === 3 || count === 4 || count === 5) && (word = "Careless!");
count > 5 && (word = "Hobo!");
  
  let head = arr.join('').replaceAll('/','-')
  
  return [head,word]
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: ternary operator syntax
Specific Note: 
Key Learning/Reinforcement: you can set variables before ternary operators just like a if statement in order to change a variable based on conditionals.
*/

//Alternative Solution Link: function bald(x) {
  const count = x.split('/').length - 1;
  let look;
  switch (count) {
    case 0: look = 'Clean'; break;
    case 1: look = 'Unicorn'; break;
    case 2: look = 'Homer'; break;
    case 3:
    case 4:
    case 5: look = 'Careless'; break;
    default: look = 'Hobo';
  }
  return [x.replace(/\//g, '-'), look + '!'];
}
