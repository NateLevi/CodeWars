/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str) {
  //Loop through the string, if theres a vowel then remove it
  let test = str.split('')
  return test.filter(char => !/[aeiou]/i.test(char)).join('')
}
/*
P: string
R: return a new string with all vowels removed
E: "This is a test" -> "Ths s tst"
*/
