function countSalutes(hallway) {
  let rightCount = 0;
  let salutes = 0;

  for (let i = 0; i < hallway.length; i++) {
    const char = hallway[i];
    if (char === '>') {
      rightCount += 1;
    } else if (char === '<') {
      salutes += 2 * rightCount;
    }
  }

  return salutes;
}
