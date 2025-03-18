function filterString(value) {
  let result = (value.split('').filter(element => /\d/.test(element)).join(''))
  return Number(result)
}
/*
P: string
R: return the number within the string
E: ["hiand1bye"]-> 1
*/
