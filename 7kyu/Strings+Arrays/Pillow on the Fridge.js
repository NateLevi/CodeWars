function pillow(s) {
  for (let i = 0; i < s[0].length; i++) { 
    if (s[0][i] === 'n' && s[1][i] === 'B') {
      return true;
    }
  }
  return false;
}

/*
P: array of two strings, string has a fridge "n" and second string has a pillow "B"
R: if pillow or "B" is first then return true else return false
E: [ 'n', 'B' ], true); 
P: 
*/
