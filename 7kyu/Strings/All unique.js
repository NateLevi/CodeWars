function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

/*
P: string
R: true or false if string has only unique characters
E: "hello"-> false
P:
*/
