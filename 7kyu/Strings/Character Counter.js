// --- Codewars Link: https://www.codewars.com/kata/56786a687e9a88d1cf00005d/solutions/javascript
// --- Title: Character Counter
// --- Kyu: 7 kyu
// --- Date Solved: 6/23/25

/*
P: s = string word
R: true or false if every character has exact same number of occurrences
E: ("abcabcd"),false
P: if the element occurs more then once return false
*/

// --- My Solution:
function validateWord(s) {
  let test = s.toLowerCase().split('');
  let count = test.filter(x => x === test[0]).length;

  for (let i = 1; i < test.length; i++) {
    if (test.filter(x => x === test[i]).length !== count) {
      return false;
    }
  }

  return true;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: My brain hurt on this one. I sort of understand it. So get the count of
the first element, then filter out the elements length and compare it to the first element, if
its 1 then return false else true. 
Specific Note: I had to ask chatgpt how to get the occurences of elements in an array. Filter
made since because you filter out the elements and do .length to get the elemnt amount.
Key Learning/Reinforcement: I struggled to think through this one, the main struggle was getting
the length of the elements. 
*/

//Alternative Solution Link: 
function validateWord(s){
  let str = s.toLowerCase().split('');
  
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++){
    count = str.filter(el => el == str[i])
    arr.push(count.length)
    
  }
return arr.every(el => el == arr[0])
}
