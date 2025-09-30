// --- Codewars Link: https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
// --- Title: Meeting
// --- Kyu: 6 kyu
// --- Date Solved: 9/30/25

/*
P: string of first and last name with : and ;
R: strings uppercased, sorted alphabetically by last name, if last name is same, sort by first name
P: 
upper case everything
split array by each person
create empty
loop through split array, if the first letter of the last name comes before the next then 
*/

// --- My Solution:
function meeting(s) {
  return s
    .toUpperCase()
    .split(';')
    .map(e => e.split(':').reverse())
    .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))
    .map(([last, first]) => `(${last}, ${first})`)
    .join('');
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: localecompare method, destructing in map, spliting
Specific Note: 
Key Learning/Reinforcement: Didn't know you could destructure inside a .map method, also the sort
with the || operator was clever because localecompare returns 1 or -1 and 0 if not either. 
*/

//Alternative Solution Link: 
