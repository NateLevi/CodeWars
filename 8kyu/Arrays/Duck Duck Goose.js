function duckDuckGoose(players, goose) {
let index = (goose - 1) % players.length;
  return players[index].name;
}
