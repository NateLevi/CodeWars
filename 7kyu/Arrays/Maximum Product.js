function adjacentElementsProduct(array) {
  let arr = [] 
  for(let i=0; i < array.length - 1;i++){
    arr.push(array[i] * array[i + 1])
  }
  return Math.max(...arr)
}
/*
P: array of integers
R: maximum product from multiplying 2 adjacent nums in the array
E: [2,4,6]-> 24
P: Multiple each pair then compare them and return highest value
*/
