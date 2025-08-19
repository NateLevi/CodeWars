// --- Codewars Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// --- Title: Who likes it?
// --- Kyu: 7 kyu
// --- Date Solved: 8/19/25

/*
P: names = array of strings
R:return "name likes this"
E: ["Peter"] -->  "Peter likes this"
P: Loop over elements, assign them to temperal literals then 
*/

// --- My Solution:
function likes(names) {
  
  if(names.length === 0){
    return "no one likes this"
  }
  for(let i=0; i < names.length;i++){
  
    if(names.length === 1){
    return `${names[i]} likes this`
  }
  else if(names.length === 2){
    return `${names[i]} and ${names[i + 1]} like this`
  }
  else if(names.length === 3){
    return `${names[i]}, ${names[i+1]} and ${names[i+2]} like this`
  }
  else if(names.length >= 4){
    return `${names[i]}, ${names[i+1]} and ${names.length - 2} others like this`
  }
}
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: writing out all the conditionals
Specific Note: Code was pretty DRY, there's got to be a more condensed way to do it
Key Learning/Reinforcement: temperal literals, conditionals
*/

//Alternative Solution Link: 
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
