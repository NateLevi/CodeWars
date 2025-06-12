function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':').map(Number);
    if (x > y) {
      count += 3;
    } else if (x === y) {
      count += 1;
    }
  }
  return count;
}
