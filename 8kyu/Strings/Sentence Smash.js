/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/
function smash (words) {
//    return words.join(' ')
   
  let sent = ''
  for(let i=0; i < words.length; i++){
    sent += words[i] + " "
  }
  return sent.trim()
};
/*
P: array of word strings
R: the array but as a sentence
E: ['hello', 'world']->'hello world'
*/
