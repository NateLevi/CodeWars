function inArray(array1,array2){
  let arr = []
  
  for(let i = 0 ; i < array1.length;i++){
    for(let j = 0; j < array2.length;j++){
      
      if(!arr.includes(array1[i])){
        
      if(array2[j].includes(array1[i])){
      arr.push(array1[i])
      }
    }
    }
    
  }
  return arr.sort((a,b)=> a.localeCompare(b))
}
//using includes works when seeing if a string is inside another string. It also can be used on arrays.
