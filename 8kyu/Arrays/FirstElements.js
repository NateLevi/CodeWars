/*
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
*/
function first(arr, n = 1) {
  if(n > 0){
    return arr.slice(0,n)
  }
  else{
    return []
  }
  
}
/*
P: array of strings, and n which is the number of letters in new array
R: new array [] with letters determined by n
E: var arr = ['a', 'b', 'c', 'd', 'e']; first(arr, 2) //=> ['a', 'b']
*/
