function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0);
}
/*
P: array of strings
R: that array but removed every second element from the array
E: ['1','2','3','4'] -> ['1','3']
*/
