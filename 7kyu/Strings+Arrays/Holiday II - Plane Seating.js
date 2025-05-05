// --- Codewars Link: https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript
// --- Title: Holiday II - Plane Seating

// --- Kyu: 7 kyu
// --- Date Solved: 5/5/2025

/*
P: a = seat number Ex: '2B'
R: return seat location, if number is over 60 return 'No Seat!!'
E: '2B' would return 'Front-Left'.
P: if number is 1-20 set a variable to front, 21-40 to middle and 41-60 to back, do same for letters
*/

// --- My Solution:
function planeSeat(a){
  const num = Number(a.match(/[0-9]+/));
  const letter = a.match(/[A-Z]/); 

  if (num > 60 || num < 1 || !letter || !/[A-K]/.test(letter) || /[IJ]/.test(letter)) {
    return "No Seat!!";
  }

  let section;
  if (num <= 20) section = "Front";
  else if (num <= 40) section = "Middle";
  else section = "Back";

  let cluster;
  if (/[A-C]/.test(letter)) cluster = "Left";
  else if (/[D-F]/.test(letter)) cluster = "Middle";
  else if (/[G-HK]/.test(letter)) cluster = "Right";

  return `${section}-${cluster}`;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Getting the regex correct, the error cases, and turning the digits into numbers not array
Specific Note: Used ai to test it, ai gave me the No Seat code testing the errors, Should of looking through the kata more but it was confusing based on the return i was getting while testing
Key Learning/Reinforcement: using .test, regex, and .match more often

Alternative Solution Link: 

Review Notes: 
*/
