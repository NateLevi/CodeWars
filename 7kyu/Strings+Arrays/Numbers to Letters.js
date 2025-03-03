function switcher(x) {
  const chars = ' zyxwvutsrqponmlkjihgfedcba!? '
  return x.map(item => chars[item]).join('')
}
/*
P: array of numbers as strings
R: the letter in the alphabet reversed corresponding to the number in element
E: ['24','26','9']-> 'car'
*/
