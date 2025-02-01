/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
*/

function sumOfDifferences(arr) {
  if(arr.length <= 1){
    return 0
  }
  let sorted = arr.sort((a,b) => b - a);
  let sum = 0
  for(let i=0; i < sorted.length - 1; i++){
    sum += sorted[i] - sorted[i + 1]
  }
  return sum
}
