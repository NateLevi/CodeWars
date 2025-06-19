// --- Codewars Link: https://www.codewars.com/kata/62a933d6d6deb7001093de16/train/javascript
// --- Title: Consecutive Vowels in a String
// --- Kyu: 7 kyu
// --- Date Solved: 6/19/25

/*
P: string of letters
R: return number of ordered and consecutive vowels from 'a'
E:
P: Loop through string, stop when you get to a vowel, add 1 if vowel if after previous vowel order
ignore the vowels that aren't in the aeiou order?
start the count if element is an 'a'
*/

// --- My Solution:
function getTheVowels(word) {
  let letters = word.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let indexCount = 0;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === vowels[indexCount]) {
      count++;
      indexCount = (indexCount + 1) % vowels.length;
    }
  }

  return count;
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: This was difficult to think through, specifically on comparing to the order of the vowels.
Specific Note: I used chatgpt for help, it gave me the index counter idea, which I ended up resorting to it's code
Key Learning/Reinforcement: Thinking outside the box for counters and comparing by an order of an array. 
*/

//Alternative Solution Link: 
function getTheVowels(string) {
    let arrayOfVowels = ['a','e','i','o','u'];
    let count = 0;
    let arrayOfLetters = string.split('');

    // Iterates through the array of letters
    for (let i = 0; i < arrayOfLetters.length; i++) {
        // If "a" is found 
        if (arrayOfVowels[0] == arrayOfLetters[i]) {    // (really means first index of array)
            // Increment count by one.
            count++;
            // Remove "a" from array of vowels 
            arrayOfVowels.shift();                      // (really means first index of array)
        }
        // If arrayOfVowels is empty
        if (arrayOfVowels.length == 0) {
            // Reload the array of vowels
            arrayOfVowels = ['a','e','i','o','u'];
        }
    }
    return count;
}
