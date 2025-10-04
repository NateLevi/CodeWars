// --- Codewars Link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// --- Title: Stop gninnipS My sdroW!
// --- Kyu: 6 kyu
// --- Date Solved: 10/4/25

/*
P: string of one or more words
R: return string but all words that have more then five or more letters reverse. 
E:"Hey fellow warriors"  --> "Hey wollef sroirraw" 
P: split string into words, grab length of element, reverse if more then 5 then join back together
*/

// --- My Solution:
function spinWords(string){
  let words = string.split(' ')
  let arr = []
  
  for(let i=0;i < words.length;i++){
    
    if(words[i].length >= 5){
      
      let strWord = words[i].split('').reverse().join('')
      arr.push(strWord)
    }
    else{
      arr.push(words[i])
    }
    
  }
  return arr.join(' ')
}


/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: 
Key Learning/Reinforcement: Can only use .reverse on arrays
*/

//Alternative Solution Link: 
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
