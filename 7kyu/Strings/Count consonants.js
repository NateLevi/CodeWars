function consonantCount(str) {
  const conts = 'aeiouAEIOU';
  const string = str.split('');

  return string.reduce((a, c) => 
    /[a-zA-Z]/.test(c) && !conts.includes(c) ? a + 1 : a, 0);
}


/*
P: english text
R: number of consonants in str
E: 'hello'-> 3
P: loop through string, get sum of str that does not include aeiou
*/
