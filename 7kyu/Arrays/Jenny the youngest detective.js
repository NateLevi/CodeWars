function missingWord(nums, str) {
  let smallArr = nums.slice().sort((a, b) => a - b);
  let word = str.split(' ').join('');
  let result = '';
  for (let i = 0; i < smallArr.length; i++) {
    if (smallArr[i] >= word.length) {
      return "No mission today";
    }
    result += word.charAt(smallArr[i]);
  }
  return result.toLowerCase();
}
/*
P: array of 3 numbers
R: string of words with each number representing the position of letter in the string in increasing order
E: 
*/
