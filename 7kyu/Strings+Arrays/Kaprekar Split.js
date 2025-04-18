function kaprekarSplit(n) {
  let squareStr = String(n ** 2);

  for (let i = 0; i <= squareStr.length; i++) {
    let left = squareStr.slice(0, i);
    let right = squareStr.slice(i);
    let sum = parseInt(left || '0') + parseInt(right);
    if (sum === n) {
      return i;
    }
  }

  return -1;
}

/*
P: number
R: If input is a kaprekar number return the index 
E:
P:
*/
