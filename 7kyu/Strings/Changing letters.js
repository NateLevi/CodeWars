function swap (string) {
  const vowels = 'aeiou'
  return string.split('').map(e=> vowels.includes(e) ? e.toUpperCase() : e).join('')
}
/*
P: string of word/words
R: new string with vowels capitalized
E: "hello world!"->"hEllO wOrld"
P: Loop through letters, if vowel includes letter then make vowel capitalized
*/
