function alphaSeq (str) {
  const arr = str.toLowerCase().split('').sort()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  const result = arr.map(letter => {
    const repeated = letter.repeat(alphabet.indexOf(letter) + 1)
    return repeated.charAt(0).toUpperCase() + repeated.slice(1);
  });
  return result.join(',')
}
/*
P: random string of letters
R: letters seperated by commas sorted alphabetically starting with an upper case
*/
