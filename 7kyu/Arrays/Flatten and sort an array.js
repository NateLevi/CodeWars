function flattenAndSort(array) {
  return array.flat().sort((a,b)=> a - b)
}

/*
P: array with nested arrays of numbers
R: array of numbers
E: [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6,7,8,9]
*/
