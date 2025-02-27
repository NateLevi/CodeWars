function countBy(x, n) {
  let arr = []
  for(let i=1 ; i<=n; i++){
    arr.push(i * x)
  }
  return arr
}
/*
P: n = array length x = multiple of array
R: an array of the multiples up to n
E: x = 1, n=3 -> [1,2,3]
*/
