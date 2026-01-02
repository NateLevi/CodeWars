function nthSmallest(arr, pos){
  let sortedArr = arr.sort((a,b)=> a - b)
  
  return arr[pos - 1]
}

/*
P: array, pos = nth position
R: return the element of pos smallest number
E: arr=[15,20,7,10,4,3]   n=3    ==> return 7 
P: sort in ascending order, grab the element based on the pos index value - 1
*/

