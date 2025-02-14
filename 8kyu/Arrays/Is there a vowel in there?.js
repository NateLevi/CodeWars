/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/
function isVow(a){
  // Loop through array check if its a number matching a vowel num, if so make a new array
  return a.map(x => {
    switch (x) {
        case 97:
          return 'a'
        case 101:
          return 'e'
        case 105:
          return 'i'
        case 111:
          return 'o'
        case 117:
          return 'u'
        default:
          return x;
    }
})
}
/*
P: array of numbers with possible vowel
R: if array contains a vowel change value to a string
E: [97,98,100,101] -> ["a",98,100,"e"]
*/
