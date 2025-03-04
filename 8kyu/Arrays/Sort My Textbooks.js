function sorter(arr) {
  return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}
/*
P: array of strings with a capital at start
R: sort the lise by subject
E: 'History, Algebra' -> 'Algebra, History'
*/
