/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/
function mergeArrays(a, b) {
  let c = a.concat(b).sort((a, b) => a - b);
  return [...new Set(c)]
}
/*
P: two arrays with integers
R: one long array merged from a and b
E: [1,2,3],[4,5,6] -> [1,2,3,4,5,6]
*/
