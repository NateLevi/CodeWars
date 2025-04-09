function alternate(n, firstValue, secondValue){
  let arr = []
  for(let i = 0; i < n ; i++){
    if(arr[i - 1] === firstValue){
      arr.push(secondValue)
    }
    else{
      arr.push(firstValue)
    }
  }
  return arr
}
/*
P: n = integer
R: array of n size alternating between firstValue and secondValue
E: 5, "hi", "bye" -> ['hi','bye','hi','bye','hi']
P: Create a new array, push the first then second for n amount of times?
*/
