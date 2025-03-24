function digits(n) {
  let str = String(n).split('')
  return str.length > 1 ? str.length : 1
}
/*
P: integer
R: total number of digits in the integer
E: 55 -> 2
*/
