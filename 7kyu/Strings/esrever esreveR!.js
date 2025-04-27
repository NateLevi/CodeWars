function esrever( str ){
  
  let word = str.split('')
  
  let punc = word.pop()
  
  
  return str === '' ? '' : word.reverse().join('') + `${punc}`
}
/*
P: str = string
R: reverse order of words and reverse the letters within the words with the !?.
E: esrever("hello world.") == "dlrow olleh."
P: 
*/
