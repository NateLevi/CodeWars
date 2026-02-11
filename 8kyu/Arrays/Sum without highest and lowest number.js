function sumArray(array) {
  
  if(array == null || array.length < 3){return 0}
  
  let newArr = array.sort((a,b)=> a - b)
  
  let sum = 0
  
  for(let i = 0; i < newArr.length;i++){
  
    if(i !== 0 && i !== newArr.length - 1){
      sum += newArr[i]
    }
    
  }
  return sum
  
}
