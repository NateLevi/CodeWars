function switchDict(dic) {
  let value = Object.entries(dic)
  
  let obj = {}
  
  for(let i=0; i < value.length; i++){
    if(!obj[value[i][1]]){
      obj[value[i][1]] = []
    }
    obj[value[i][1]].push(value[i][0])    
  }
  return obj
}

/*
P: dic = keys and values
R: return and swap the keys and values
E: {'hello':'Bob'} -> {'Bob':'hello'}
P: loop through the objects values, if the value occurs more then once, set that as the key
Filter out the keys that have the same value and create a new object 
*/
