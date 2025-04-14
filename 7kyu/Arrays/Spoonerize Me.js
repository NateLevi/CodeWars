function spoonerize(words) {
  let arr = words.split(' ');

  let firstWord = arr[0];
  let secondWord = arr[1];

  let first = secondWord[0] + firstWord.slice(1);
  let second = firstWord[0] + secondWord.slice(1);

  return `${first} ${second}`;
}

/*
P: two words seperated by a space
R: same string, but swap the first letter of each word
E: "hi world"-> "wi horld"
P: loop through words, if theres a space after then slice without the first letter or replace [0] with the index of letter after space
*/
