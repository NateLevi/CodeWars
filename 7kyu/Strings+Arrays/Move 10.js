// --- Codewars Link: https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript
// --- Title: Move 10
// --- Kyu: 7 kyu
// --- Date Solved: 8/1/25

/*
P: string with 10 letters
R: string but every letter is moved forward 10 letters through the alphabet
E: ("testcase") => "docdmkco"
P: Loop through each letter then replace each element with the letter 10 spots forward
  map over each element, turn element to char number then add
*/

// --- My Solution:
function moveTen(s){
  
  return s.split('').map(e=> String.fromCharCode(97+((e.charCodeAt(0) - 97 + 10) % 26))).join("")
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: figuring out ASCII and looping back to a after the 27 of ascii
Specific Note: asked chatgpt for help, didn't do much coding, but i managed to think through problem
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
function moveTen(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}
