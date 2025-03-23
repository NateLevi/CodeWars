function noOdds( values ){
  return values.filter(num => num % 2 === 0)
}
/*
P: array of numbers
R: values of arrays that are not odd
E: [1,2,3,4]-> [1,3]
*/
