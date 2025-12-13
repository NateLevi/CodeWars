howManyBees = function (hive) {
  if (!hive || hive.length === 0) return 0;

  let count = 0;
  let newHive = hive.flat();
  const cols = hive[0].length;

  // forward horizontal
  for (let i = 0; i <= newHive.length - 3; i++) {
    if (
      newHive[i] === "b" &&
      newHive[i + 1] === "e" &&
      newHive[i + 2] === "e" &&
      i % cols <= cols - 3
    ) {
      count++;
    }
  }

  // reverse horizontal
  for (let i = newHive.length - 1; i >= 2; i--) {
    if (
      newHive[i] === "b" &&
      newHive[i - 1] === "e" &&
      newHive[i - 2] === "e" &&
      i % cols >= 2
    ) {
      count++;
    }
  }

  // forward vertical
  for (let i = 0; i <= hive.length - 3; i++) {
    for (let j = 0; j < hive[i].length; j++) {
      if (
        hive[i][j] === "b" &&
        hive[i + 1][j] === "e" &&
        hive[i + 2][j] === "e"
      ) {
        count++;
      }
    }
  }

  // reverse vertical
  for (let i = hive.length - 1; i >= 2; i--) {
    for (let j = 0; j < hive[i].length; j++) {
      if (
        hive[i][j] === "b" &&
        hive[i - 1][j] === "e" &&
        hive[i - 2][j] === "e"
      ) {
        count++;
      }
    }
  }

  return count;
};
