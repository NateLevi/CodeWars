//1
function shorterReverseLonger(a,b){
  const revA = a.split('').reverse().join('')
  const revB = b.split('').reverse().join('')
  return a.length === b.length ? `${b}` + revA + `${b}` :
  a.length < b.length ? `${a}` + revB + `${a}` : `${b}` + revA + `${b}`
}
/*
P: two strings passed in a and b, can be empty
R: string of shorter+reverse(longer)+shorter
E: a = 'hi' b = 'bye' -> hieybhi
*/
