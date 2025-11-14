// --- Codewars Link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// --- Title: The Hashtag Generator
// --- Kyu: 5 kyu
// --- Date Solved: 11/14/25

/*
P: string of words/letters
R: string hash tagged, first letter capital, remaining lower case, if longer thne 140 chars = false, if input is empty false
E: " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
P: join or trim the extra spaces, capitalize the first element in each word and lowercase rest using slice, then join
*/

// --- My Solution:
function generateHashtag(str) {
  str = str.trim()

  if (str.length === 0) return false

  let words = str.split(/\s+/)

  let result = "#" + words
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join("")

  return result.length > 1 && result.length <= 140 ? result : false
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: spliting by just whitespaces using regex
Specific Note: gpt helped me, was a bit lazy, i understand the logic though
Key Learning/Reinforcement: splitting with s+ is for white spaces
*/

//Alternative Solution Link: 
