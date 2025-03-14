function explode(s) {
  let result = ''
  for ( let i = 0; i < s.length; i++){
    result += s[i].repeat(s[i])
  }
  return result
}
/*
P: string of digits
R: String where each digit is repeated a number of that value
E: "123"-> "122333"
*/
