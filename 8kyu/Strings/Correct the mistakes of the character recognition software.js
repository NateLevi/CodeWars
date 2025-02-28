function correct(string) {
  let str = string.split('');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i] === '5' ? 'S' :
             str[i] === '0' ? 'O' :
             str[i] === '1' ? 'I' : str[i];
  }
  return str.join('');
}


/*
P: string with a number to convert
R: new string with no numbers
E: C1TY -> CITY
*/
