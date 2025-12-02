// --- Codewars Link: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// --- Title: Greed is Good
// --- Kyu: 5 kyu
// --- Date Solved: 12/2/25

// --- My Solution:
function score(dice) {
  //creates obj with count of numbers
  let obj = {};
  for (let num of dice) {
    obj[num] = (obj[num] || 0) + 1;
  }

  let countObj = new Map();

  for (let num in obj) {
    let count = obj[num];
    num = Number(num);

    // triple
    if (count >= 3) {
      let tripleArr = [num, num, num];
      countObj.set(tripleArr, 1);
      count -= 3;
    }

    // leftover singles
    if (count > 0) {
      let singleArr = Array(count).fill(num);
      countObj.set(singleArr, count);
    }
  }

  let scoreObj = {
    "1,1,1": 1000,
    "6,6,6": 600,
    "5,5,5": 500,
    "4,4,4": 400,
    "3,3,3": 300,
    "2,2,2": 200,
    "1": 100,
    "5": 50
  };

  let total = 0;

  for (let [keyArray, count] of countObj) {
    let num = keyArray[0];
    let keyString = keyArray.toString();

    // triple case
    if (keyArray.length === 3) {
      total += scoreObj[keyString];
      continue;
    }

    // single 1 or 5 case
    if (num === 1 || num === 5) {
      total += scoreObj[String(num)] * count;
    }
  }

  return total;
}

/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: math thinking, objects
Specific Note: used a map and objects, used gpt for help, coded a good portion of it, but code could be simpler
Key Learning/Reinforcement: you can for of loop over a map, no bracket or dot notation on a map, only .has,.get,.set
*/

//Alternative Solution Link: 
function score( dice ) {
  var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}
