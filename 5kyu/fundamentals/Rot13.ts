// --- Codewars Link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// --- Title: Rot13
// --- Kyu: 5 kyu
// --- Date Solved: 10/15/25

// --- My Solution:
function rot13(message){
  let arr = []
  
  let splitStr = message.split('')

  for(let i=0; i < splitStr.length;i++){

    if (/[A-Za-z]/.test(splitStr[i])) {
      
      let code = splitStr[i].charCodeAt(0);
      
    if (code >= 65 && code <= 90){ 
      code = ((code - 65 + 13) % 26) + 65;
    } 
      
    else if (code >= 97 && code <= 122){
      code = ((code - 97 + 13) % 26) + 97;
    }
      
    arr.push(String.fromCharCode(code));
    }
    else{
      arr.push(splitStr[i])
    }
  }
  return arr.join('')
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: ascii numbers and there corresponding characters
Specific Note: used gpt for the ascii shift logic, was kind of lazy on trying to figure that out
Key Learning/Reinforcement: .characterCodeAt() returns the ascii value of a letter, String.fromCharCode() gives you the value at a char code
*/

//Alternative Solution Link: 
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
