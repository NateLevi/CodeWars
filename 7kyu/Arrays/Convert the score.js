function scoreboard(string) {
  const scores = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const words = string.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (scores.hasOwnProperty(words[i])) {
      result.push(scores[words[i]]);
    }
   }

  return result;
}
