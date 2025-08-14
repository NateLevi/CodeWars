function solve(stones) {
  if (stones === "") return 0;

  let letters = stones.split('');
  let total = 0;

  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] === letters[i + 1]) {
      total++;
    }
  }

  return total;
}
