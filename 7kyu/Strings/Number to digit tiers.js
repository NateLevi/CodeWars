function createArrayOfTiers(num) {
  let str = String(num)
  let arr = []
  
  for(let i = 1; i <= str.length; i++){
    arr.push(str.slice(0,i))
  }
  return arr
}
/*
P: Number
R: array of strings containg the number cut off every digit
E: 569 -> ['5','56','569']
P: 
*/
