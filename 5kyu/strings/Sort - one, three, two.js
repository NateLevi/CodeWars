// --- Codewars Link: https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/train/javascript
// --- Title: Sort - one, three, two
// --- Kyu: 5 kyu
// --- Date Solved: 12/19/25

// --- My Solution:
function sortByName(ary) {

  if (ary.length === 0) return [];

  let nums = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  let tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  let teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };

  let hundreds = {
    1: "one hundred",
    2: "two hundred",
    3: "three hundred",
    4: "four hundred",
    5: "five hundred",
    6: "six hundred",
    7: "seven hundred",
    8: "eight hundred",
    9: "nine hundred"
  };

  let wordArr = [];
  let aryStr = ary.map(e => String(e).split(""));

  for (let i = 0; i < aryStr.length; i++) {

    // one digit
    if (aryStr[i].length === 1) {
      wordArr.push(nums[aryStr[i][0]]);
    }

    // two digits
    else if (aryStr[i].length === 2) {

      if (aryStr[i][0] === "1") {
        wordArr.push(teens[aryStr[i][0] + aryStr[i][1]]);
      }
      else if (aryStr[i][1] === "0") {
        wordArr.push(tens[aryStr[i][0]]);
      }
      else {
        wordArr.push(
          tens[aryStr[i][0]] + " " + nums[aryStr[i][1]]
        );
      }
    }

    // three digits
    else if (aryStr[i].length === 3) {

      let hunWord = hundreds[aryStr[i][0]];

      if (aryStr[i][1] === "0" && aryStr[i][2] === "0") {
        wordArr.push(hunWord);
      }
      else if (aryStr[i][1] === "1") {
        wordArr.push(
          hunWord + " " + teens[aryStr[i][1] + aryStr[i][2]]
        );
      }
      else {
        let parts = hunWord;

        if (aryStr[i][1] !== "0") {
          parts += " " + tens[aryStr[i][1]];
        }
        if (aryStr[i][2] !== "0") {
          parts += " " + nums[aryStr[i][2]];
        }

        wordArr.push(parts);
      }
    }
  }

  const pairs = ary.map((num, i) => ({
    num,
    word: wordArr[i]
  }));

  pairs.sort((a, b) => a.word.localeCompare(b.word));

  return pairs.map(p => p.num);
}

/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: sorting, problem solving, 
Specific Note: Sorting by another sorted array/object using map to make an array of pair objects
Key Learning/Reinforcement: you can create objects within arrays
*/

//Alternative Solution Link: 
