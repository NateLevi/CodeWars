// --- Codewars Link: https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
// --- Title: Good vs Evil
// --- Kyu: 6 kyu
// --- Date Solved: 11/23/25

// --- My Solution:
function goodVsEvil(good, evil){
const goodSide = {
  Hobbits: 1,
  Men: 2,
  Elves: 3,
  Dwarves: 3,
  Eagles: 4,
  Wizards: 10
};

const badSide = {
  Orcs: 1,
  Men: 2,
  Wargs: 2,
  Goblins: 2,
  UrukHai: 3,
  Trolls: 5,
  Wizards: 10
};
  
  let goodarr = Object.keys(goodSide)
  let badarr = Object.keys(badSide)
  
  let goodGuys = good.split(' ').map(Number)
  let badGuys = evil.split(' ').map(Number)
  
  let goodguyarr = []
  let badguyarr = []
  
  for(let i = 0; i < badGuys.length;i++){
        if(goodGuys.length > i){       
        goodguyarr.push(goodGuys[i] * goodSide[goodarr[i]])
        }
        badguyarr.push(badGuys[i] * badSide[badarr[i]])  
  }
  
  let goodsum = goodguyarr.reduce((acc,cur)=> acc += cur,0)
  let badsum = badguyarr.reduce((acc,cur)=> acc += cur,0)
  
  if(goodsum > badsum){
    return 'Battle Result: Good triumphs over Evil'
  }
  else if(badsum > goodsum){
    return 'Battle Result: Evil eradicates all trace of Good'
  }
  else{
    return 'Battle Result: No victor on this battle field'
  }
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: objects, arrays, object keys, complexity
Specific Note: gpt helped me polish it, but all done by me logically
Key Learning/Reinforcement: thinking without breaks, having a for in loop on a object will run for all properties in an object
*/

//Alternative Solution Link: 
