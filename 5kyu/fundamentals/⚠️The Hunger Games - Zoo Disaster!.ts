// --- Codewars Link: https://www.codewars.com/kata/5902bc7aba39542b4a00003d/train/javascript
// --- Title: The Hunger Games - Zoo Disaster!
// --- Kyu: 6 kyu
// --- Date Solved: 11/1/25

// --- My Solution:
var whoEatsWho = function (zoo) {
  const diet = {
    antelope: ["grass"],
    "big-fish": ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken", "sheep"],
    giraffe: ["leaves"],
    lion: ["antelope", "cow"],
    panda: ["leaves"],
    sheep: ["grass"]
  };

  let list = zoo.split(",");
  let result = [list.join(",")];

  for (let i = 0; i < list.length; i++) {
    if (diet[list[i]]?.includes(list[i - 1])) {
      result.push(`${list[i]} eats ${list[i - 1]}`);
      list.splice(i - 1, 1);
      i = -1;
    } else if (diet[list[i]]?.includes(list[i + 1])) {
      result.push(`${list[i]} eats ${list[i + 1]}`);
      list.splice(i + 1, 1);
      i = -1;
    }
  }

  result.push(list.join(","));
  return result;
};

// My Complexity: O(n^3)
// Better Complexity: Linked List O(n)
/*
--- Reflection & Struggle ---

Primary Struggle Tag: using includes for values of a object, using splice to remove elements in a array, time complexity effciency
Specific Note: used gpt, but logic was mostly mine, had trouble thinking about includes method on object
Key Learning/Reinforcement: includes method on object, optional chaining, splicing in a loop
*/

//Alternative Solution Link: 
