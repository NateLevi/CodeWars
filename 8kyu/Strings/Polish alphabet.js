/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/
function correctPolishLetters(string) {
  return string.replace(/[ąćęłńóśźż]/g, letter => 
    letter === 'ą' ? 'a' :
    letter === 'ć' ? 'c' :
    letter === 'ę' ? 'e' :
    letter === 'ł' ? 'l' :
    letter === 'ń' ? 'n' :
    letter === 'ó' ? 'o' :
    letter === 'ś' ? 's' :
    letter === 'ź' ? 'z' :
    letter === 'ż' ? 'z' : letter
  );
}
/*
P: a string containing polish vowels
R: the same string but polish letters -> english letters
E: "Lech Wałęsa -> "Lech Walesa"
*/
