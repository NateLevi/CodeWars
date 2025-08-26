// --- Codewars Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// --- Title: Your order, please
// --- Kyu: 6 kyu
// --- Date Solved: 8/26/25

/*
P: word = string, 
R: return words sorted according to the numbers 
E: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
P:
*/

// --- My Solution:
function order(words){
  let str = words.split(' ')
  let nums = words.split('').map(e => Number(e)).filter(e => !Number.isNaN(e) && e !== 0);
  
  let obj = {}
  
  for(let i=0; i < words.length;i++){
    
    obj[str[i]] = nums[i] 
    
  }
  
  return Object.entries(obj).filter(e => e[1] !== undefined).sort((a,b) => a[1] - b[1]).flat().filter(e => typeof e !== 'number').join(' ')
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring how to exract numbers from elements and sort by that. 
Specific Note: used gpt for some help
Key Learning/Reinforcement: using more objects is extremely helpful. I learned about Object.fromentries() creating a new object based on an array of key value pairs.
Also learned to filter NaN you have to use Number.isNaN() because NaN is considered a number. Also you can sort by an objects value using a[1] 
*/

//Alternative Solution Link: 
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    

