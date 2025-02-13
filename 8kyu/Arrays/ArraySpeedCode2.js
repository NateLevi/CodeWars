/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/
function arrayMadness(a, b) {
  let aSum = a.reduce((acc,cur) => acc += cur ** 2,0)
  let bSum = b.reduce((acc,cur)=> acc += cur ** 3,0)
  return aSum > bSum ? true : false;
}
/*
P: a = array, b = array >=1
R: boolean value
E: ([4, 5, 6], [1, 2, 3]); // returns true
*/
