// --- Codewars Link: https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript
// --- Title: Hells Kitchen
// --- Kyu: 7 kyu
// --- Date Solved: 5/7/25

/*
P: a = string of four words
R: return capitalized strings with "!!!!" added to the end of each string
E: 'Hello World' -> HELLO!!!! WORLD!!!!
P: if a includes a or A then replace it with @, if its a vowel replace it with *
*/

// --- My Solution:
function gordon(a){
  let arr = [...a]
  let vowels = 'eiouEIOU'
  
  for(let i=0; i < arr.length; i++){
    if(arr[i] === 'a' || arr[i] === 'A'){
      arr.splice(i,1,'@')
    }
    else if(vowels.includes(arr[i])){
    arr.splice(i,1,'*')
  }
  }
  return arr.join('').toUpperCase().split(' ').join('!!!! ') + '!!!!'
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out how to add the !!!! was the hardest part, I understand the splicing, also had to double check if splicing changes the array in a loop
Specific Note: Struggled with figuring out adding the '!!!!' after the last word when joining. 
Key Learning/Reinforcement: splicing in a loop, getting used to join, uppercase and split

Alternative Solution Link: 

const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");

Review Notes: 
*/
