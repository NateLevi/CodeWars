function sumMix(x){
  let num = x.map(element=>Number(element))
  return num.reduce((acc,cur)=> acc += cur,0)
}
/*
P: array of integers as strings and numbers
R: sum of array values as numbers
E: [1,2,"3",4]-> 10
*/
