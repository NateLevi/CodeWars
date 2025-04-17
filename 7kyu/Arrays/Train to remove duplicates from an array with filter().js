function unique(arr) {
  
  return arr.filter((e,i)=> arr.indexOf(e) === i)


}
/*
P: array of numbers
R: return unique values
E: arr = [1,1,1,2,3,4,4,5,5] -> [2,3]
P: filter out the numbers that only occur once
*/
