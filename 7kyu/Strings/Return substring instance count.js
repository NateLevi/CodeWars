// --- Codewars Link: https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript
// --- Title: Return substring instance count

// --- Kyu: 7 kyu
// --- Date Solved: 7/14/25

/*
P: strings
R: return number of times search is found within fullText
E: full_text = "aa_bb_cc_dd_bb_e", search_text = "bb" => return 2
P: count how many times search is in fullText
*/

// --- My Solution:
function solution(fullText, search) {
  let len = search.length;
  let count = 0;

  for (let i = 0; i <= fullText.length - len; i++) {
    if (fullText.slice(i, i + len) === search) {
      count++;
      i += len - 1; 
    }
  }

  return count;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: chatgpt helped me for the loop, I got close but the slicing was messed up
Key Learning/Reinforcement: spliting based on length with slice instead of just .split
*/

//Alternative Solution Link: 
function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}
