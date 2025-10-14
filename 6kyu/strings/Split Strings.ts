// --- Codewars Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
// --- Title: Split Strings
// --- Kyu: 6 kyu
// --- Date Solved: 10/14/25

/*
P: string
R: splits into pairs of two characters, if string has odd number of chars, then replace second char with _
E: 'abc' =>  ['ab', 'c_']
P: split by two characters each 
*/

// --- My Solution:
function solution(str){
   let splitStr = str.split('')
   let arr = []

   for (let i = 0; i < splitStr.length;i++){
     
     let newArr = splitStr.slice(i,i + 2)
     i++
     arr.push(newArr)
     
   }
  return arr.map( e => e.join('')).map( e => e.length < 2 ? e + "_" : e)
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: testing with slice or pushing array of values
Specific Note: did a lot of tests to figure out the slicing part in the loop
Key Learning/Reinforcement: using join inside a map and length, slicing portions of an array and then adding 1
*/

//Alternative Solution Link: 
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
