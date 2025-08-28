// --- Codewars Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// --- Title: Duplicate Encoder
// --- Kyu: 6 kyu
// --- Date Solved: 8/28/25

/*
P: string of letters
R: return string of "(" if letter occurs once and ")" if it occurs more then once
E: "recede"   =>  "()()()"
P: loop through each letter, set each element to and object with the count as its value
*/

// --- My Solution:
function duplicateEncode(word){
    let obj = {}
    
    let newWord = word.toLowerCase().split('')
    
    let count = 0
    
    for(let i=0; i < newWord.length; i++){
      obj[newWord[i]] = 0
      
    }
    for(let i=0; i < newWord.length; i++){
        for(let key in obj){
          if(newWord[i] === key){
          obj[newWord[i]] += 1
          }
          
        }
    }

  let arr = []
  
  for (let i = 0; i < newWord.length; i++) {
  if (obj[newWord[i]] === 1) {
    arr.push('(')
  } else {
    arr.push(')')
  }
}
  
  return arr.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: comparing the objects keys and values to the array of letters and incrementing the value based on comparison
Specific Note: 
Key Learning/Reinforcement: learned about lastIndexOf() gives you the last index of the occuring element/string
*/

//Alternative Solution Link: 
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}
