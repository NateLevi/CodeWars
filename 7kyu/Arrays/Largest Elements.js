function largest(n, array) {
  const arr = array.sort((a,b)=> a-b)
  
  return n === 0 ? [] : arr.slice(-n)
  
}
/*
P: n = amount of elements, array of numbers
R: return new array of the n top numbers
E: 3, [1,2,3,4,5,6,7,8]-> [6,7,8]
P: sort array, then slice the last n numbers
*/
