function findLongest(array){
  const maxLength = Math.max(...array.map(e => e.toString().length))
  const num = array.filter(e => e.toString().length === maxLength);
  return num[0]
  
//   const arr = array.sort((a,b) => b.toString().length - a.toString().length).pop()
//   return arr.pop()
//   for (let i = 0 ; i < arr.length - 1; i++){
//     if(arr[i].toString().length >= arr[i+1].toString().length){
//       return arr[i]
//     }
//   }
  
}
/*
P: array of numbers
R: Return the number with the most digits
E: [1,39,400]-> 400
*/
