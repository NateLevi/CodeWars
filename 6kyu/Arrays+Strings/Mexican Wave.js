// --- Codewars Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// --- Title: Mexican Wave
// --- Kyu: 6 kyu
// --- Date Solved: 7/17/25

/*
P: string
R: array of strings where an uppercase letter ia a person standing up
E: "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
P: Loop through each string, make the index of each element uppercase through the loop
*/

// --- My Solution:
function wave(str){
  
  let arr = []
  
  for(let i=0; i < str.length; i++){
    if (str[i] === " ") continue;
    
    let chars = str.split('')
    chars.splice(i,1,str[i].toUpperCase())
    let word = chars.join('')
    
    
    arr.push(word)
    
  }
  
  return arr
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: Figuring out how to split the word into pieces
Specific Note: I used chatgpt and cheated a bit, my brain was tired and lacking focus. But I got
the understanding down. I used replace first and they didn't work, then I thought of using splice
I just didn't use it write and gpt helped me
Key Learning/Reinforcement: replace with splice is (index start, remove amount, item insert). Also
I learned that .slice(0,0) is before the first index.
*/

//Alternative Solution Link: 
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
