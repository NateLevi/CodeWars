function cubeOdd(arr) {
  for (let num of arr) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return undefined;
    }
  }

  return arr
    .map(n => n ** 3)
    .filter(n => n % 2 !== 0)
    .reduce((sum, n) => sum + n, 0);
}


//learned: if you use Number.isNaN(num) that will return true or false if it is a number or not
