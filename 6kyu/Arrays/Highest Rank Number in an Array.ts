function highestRank(arr){
  let obj = {}
  
  for(let num of arr){
    obj[num] = (obj[num] || 0) + 1
  }
  
  let count = Object.entries(obj).map(e => [Number(e[0]),e[1]]).sort((a,b)=> b[1] - a[1] || b[0] - a[0])
  
  return Number(count[0][0]) 
  
}
