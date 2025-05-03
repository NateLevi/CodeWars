function scramble(str, arr) {
  let result = []
  
  for(let i=0; i < arr.length; i++){
    result[arr[i]]= str[i]
  }
  
  return result.join('')
}

/*
P: str = string arr = array of indices 
R: return new string with rearranged characters by index of arr
E: 'halo' -> [1,3,0,2] = lhoa
P: Create a new string where each letter is the indexed letter
*/
