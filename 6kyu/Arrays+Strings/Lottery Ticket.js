// --- Codewars Link: https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
// --- Title: Lottery Ticket
// --- Kyu: 6 kyu
// --- Date Solved: 8/6/25


/*
P: ticket = string of letters and a number, win = winning number
R: Loser or Winner if mini wins are more or equal to the winning number
E: 
P: loop through each sub-array, get the character code for each letter, if code is = to number then add 1 to a
total. 
*/

// --- My Solution:
function bingo(ticket, win){
  
  let result = 0
  
  for(let i=0; i < ticket.length; i++){
    for(let j=0; j < ticket[i][0].length;j++){
      if(ticket[i][0].charCodeAt(j) === ticket[i][1]){
      result += 1
      break
    }
    }
  }
  return result >= win ? 'Winner!' : 'Loser!'
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: how to loop through nested array by just doing [i][0], using charcodeat method to get char code from letters
Specific Note: used gpt for some help on the logic, I did good it was just the repetitive numbers that throw me off a bit.
Key Learning/Reinforcement: using charCodeAt method, looping with a nested array, using break to stop a loop. 
*/

//Alternative Solution Link: 
function bingo(ticket, win){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
  {
    return "Winner!";
  }
  return "Loser!";
}
