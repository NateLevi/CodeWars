// --- Codewars Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// --- Title: Convert string to camel case
// --- Kyu: 6 kyu
// --- Date Solved: 10/12/25

/*
P: dashed string words
R: camel cased of str
E: "the-stealth-warrior" gets converted to "theStealthWarrior"
P: seperate each word uppercase the first index of each word, then join
*/

// --- My Solution:
function toCamelCase(str){
  if(str.length === 0){
    return ''
  }

  let splitStr = str.replace(/[-_]/g, ' ').split(' ')
  
  let arr = []
  
  for(let i=0; i < splitStr.length;i++){
    
    if(i === 0 && (splitStr[i][0] !== splitStr[i][0].toUpperCase())){
      arr.push(splitStr[0])
      continue
    }
    
    arr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1))
  }
  return arr.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: continue in loops, using replace with regex
Specific Note: used gpt for hints, but overall got it right, just had to read the question again to understand
Key Learning/Reinforcement: continue in a loop goes to the next iteration, replace only replaces first instance, but with regex global you can replace all
*/

//Alternative Solution Link: 
function toCamelCase(str){ 
  let arr = str.split('');
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('');
}
