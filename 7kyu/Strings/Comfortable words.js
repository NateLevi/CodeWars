const comfortableWord = word => {
  word = word.toLowerCase();
  const left = 'qwertasdfgzxcvb';
  const right = 'yuiophjklnm';

  for (let i = 0; i < word.length - 1; i++) {
    if (
      (left.includes(word[i]) && right.includes(word[i+1])) ||
      (right.includes(word[i]) && left.includes(word[i+1]))
    ) {
      continue;
    }
    return false;
  }

  return true;
};

/*
P: word
R: if word is comfortable return true if not false
E: 'yams'->true
P: Loop through word, if the even even indexs include any char in left and the odd indexs include any char in right
*/
