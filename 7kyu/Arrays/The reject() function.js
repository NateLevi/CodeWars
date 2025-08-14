function reject(array, predicate) {
    
  
  return array.filter(x => !predicate(x))
  
}

/*
P: array and preicate = function for filter
R: array filtered out
E: reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
P:
*/
