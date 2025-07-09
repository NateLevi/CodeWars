// --- Codewars Link: https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
// --- Title: Parts of a list
// --- Kyu: 7 kyu
// --- Date Solved: 7/9/25

/*
P: array of strings
R: array but with at least two elements into two non-empty parts.
E: ["az", "toto", "picaro", "zone", "kiwi"] --> [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
P: Loop through the array, combine the strings after the current element, then move the next element to the first
*/

// --- My Solution:
function partlist(arr) {
  
  let result = []
  
  for(let i=0; i < arr.length; i++){
    
    let first = arr.slice(0, i+1).join(' ')
    let last = arr.slice(i+1,arr.length).join(' ')
    
    last !== "" && result.push([first,last])
  }
  
  return result
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Adding the next element to the string of the first element of the array
Specific Note: I used chatgpt for a hint
Key Learning/Reinforcement: This was a tricky problem. I got stuck on the first element of the array.
but slice makes sense now, doing slice(0, and then the next element in the loop) which would include them. 
*/

//Alternative Solution Link: 
var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)
