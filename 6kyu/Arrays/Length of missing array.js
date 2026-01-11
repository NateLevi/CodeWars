function getLengthOfMissingArray(arrayOfArrays) {

  if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;

  for (let num of arrayOfArrays) {
    if (!num || num.length === 0) return 0;
  }

  let arrLengths = arrayOfArrays
    .map(e => e.length)
    .sort((a, b) => a - b);

  if (arrLengths.length === 0) return 0;

  let num = 0;
  for (let i = 0; i < arrLengths.length - 1; i++) {
    if (arrLengths[i + 1] !== arrLengths[i] + 1) {
      num = arrLengths[i] + 1;
      break;
    }
  }
  
  return num;
}

//Learned: I was reminded that .sort method in javascript makes the time complexity become O(n log n), which is slower then O(n). 
