function twoSort(s) {
  let arr = s.sort();
  let word = arr[0].split('');
  let result = [];
  for (let i = 0; i < word.length; i++) {
    result.push(word[i]);
    if (i < word.length - 1) {
      result.push('***');
    }
  }
  return result.join('');
}
/*
P: Array of string words
R: Sort it alphabetically and return the first value with **** between each of its letters
E: ['batman','robin','joker']-> 'b****a****t****m****a****n'
*/
