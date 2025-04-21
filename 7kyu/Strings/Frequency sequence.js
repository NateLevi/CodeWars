function freqSeq(str, sep) {
  let string = str.split('')
  
  return string.map(e => string.reduce((a, c) => c === e ? a + 1 : a, 0)).join(sep)
  
}
/*
P: str = number,letter,special charcter sep = same but as a seperator
R: return str in a sequence of number of times element occurs
E: "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
P: Loop through, count total for elements then create new array with that total for each element.
*/
