function every(arr, interval = 1, start = 0){
  let array = []
  
  for( let i = start; i < arr.length; i+= interval){
    array.push(arr[i])
  }
  return array
}
/*
P: arr = every element of array, interval = every interval, start = starting at index
R: return array dependent on the interval and start
E: [0,1,2,3,4,5,6],2-> [0,2,4,6]
P: map through array, if interval has a value then skip element by intervel, if start has a value then start the slice at that index
*/
