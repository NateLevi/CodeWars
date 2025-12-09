function pyramid(n) {
  let result = []
  
  for(let i = 1; i <= n;i++){
    result.push(Array(i).fill(1))
  }
  return result
}

/*
P: integer >= 0
R: array of subarrays of n
E: 2 => [ [1], [1, 1] ]
P:
*/
