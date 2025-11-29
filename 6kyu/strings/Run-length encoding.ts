var runLengthEncoding = function(str){
  
  let strSplit = str.split('')
  let arr = []
  let count = 0
  
  for(let i = 0; i < str.length;i++){
    count++
    if(strSplit[i + 1] === strSplit[i]){
      continue
    }
    arr.push([count,strSplit[i]])
    
    if(strSplit[i + 1] !== strSplit[i]){
      count = 0
    }
    
  }
  return arr
}
