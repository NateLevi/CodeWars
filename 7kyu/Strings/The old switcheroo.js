//1
function vowel2index(str) {
   return str.replace(/[aeiou]/gi, (match, index) => index + 1)
}
/*
P: string of words
R: string replacing all the vowels [a,e,i,o,u] with their respective position in the string
E: "Hello World" -> "H1ll4 W6rld"
*/
