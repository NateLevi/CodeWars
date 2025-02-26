function digitize(n) {
  let arr = String(n).split("")
  return arr.map(element => parseInt(element)).reverse()
}
/*
P: random non negative number
R: return digits of number within a array in reversed order
E: 1234 => [4,3,2,1]
*/
