/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.
*/
function arr2bin(arr) {
  const sum = arr.reduce((acc, cur) => {
    if (typeof cur === 'number') {
      return acc + cur;
    }
    return acc;
  }, 0);
  return sum.toString(2);
}
