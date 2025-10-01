// --- Codewars Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// --- Title: Multiples of 3 or 5
// --- Kyu: 6 kyu
// --- Date Solved: 10/1/25

/*
P: number
R: sum of the multiples of 3 or 5 below the number
E: 10, multples (3,5) = 3,5,6,9, -> 23
P: loop up to the number, if number is a multiple of 3 or 5 add to the sum, then return 
*/

// --- My Solution:
function solution(number){
  let arr = []
  
  for(let i=1; i < number;i++){
    let multi = 0
    if(i === multi){
      multi = 0
    }
    if((i % 3 === 0 && i % 5 === 0) && multi !== 0){
      let multi = i
      arr.push(i)
    }
    
    if(i % 3 === 0 || i % 5 === 0){
      arr.push(i)
    }
    else{
      arr.push(0)
    }
    
  }
  return arr.reduce((acc,cur)=> acc += cur,0)
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: repeated values in a loop
Specific Note: 
Key Learning/Reinforcement: positioning of code processes in a loop
*/

//Alternative Solution Link: 
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
