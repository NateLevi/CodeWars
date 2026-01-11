function fight(robot1, robot2, tactics) {

  robot2["tactics"] = robot2["tactics"].map(e => tactics[e]);
  robot1["tactics"] = robot1["tactics"].map(e => tactics[e]);

  let turn = true;

  if (robot2["speed"] > robot1["speed"]) {
    turn = false;
  }

  while (
    robot1["health"] > 0 &&
    robot2["health"] > 0 &&
    (robot1["tactics"].length > 0 || robot2["tactics"].length > 0)
  ) {

    if (turn) {
      if (robot1["tactics"].length > 0) {
        robot2["health"] = robot2["health"] - robot1["tactics"][0];
        robot1["tactics"].shift();
      }
      turn = false;
    } else {
      if (robot2["tactics"].length > 0) {
        robot1["health"] = robot1["health"] - robot2["tactics"][0];
        robot2["tactics"].shift();
      }
      turn = true;
    }
  }

  if (robot1["health"] <= 0) {
    return `${robot2["name"]} has won the fight.`;
  }

  if (robot2["health"] <= 0) {
    return `${robot1["name"]} has won the fight.`;
  }

  if (robot1["health"] > robot2["health"]) {
    return `${robot1["name"]} has won the fight.`;
  }

  if (robot2["health"] > robot1["health"]) {
    return `${robot2["name"]} has won the fight.`;
  }

  return "The fight was a draw.";
}


//learned: using shift on a array thats a value in an object
