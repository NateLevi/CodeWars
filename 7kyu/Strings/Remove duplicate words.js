function removeDuplicateWords (s) {
  let arr = s.split(' ')
  return [...new Set(arr)].join(' ')
}
/*
P: list of string words
R: removed duplicated words from string
E: ["hi","hi","hi","bye"]->["hi","bye"]
*/
