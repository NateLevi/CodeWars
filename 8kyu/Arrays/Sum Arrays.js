function sum (numbers) {
  return numbers.reduce((cur,acc)=> cur += acc,0)
}
/*
P: array of numbers
R: return sum of numbers, if non then return 0
E: [1,2,3,4]->10
*/
