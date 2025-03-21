function gimme (triplet) {
  const sorted = [...triplet].sort((a, b) => a - b);
  
  const middle = sorted[1]
  
  return triplet.indexOf(middle)
}
/*
P: array of 3 numbers
R: return the index of the middle number
E: [1,2,3]-> 1
P: sort the array ascending grab the middle value and then grab return the initial index
*/
