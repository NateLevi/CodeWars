function removeNthElement(arr, n) {
  var arrCopy = arr.slice(0,arr.length);
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
