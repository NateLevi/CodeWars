function countSheep(num){
  let arr = []
  if(num > 0){
  for(let i=1; i <= num; i++){
    arr.push(`${i} sheep...`)
    }
  }
  else{
    return ''
  }
  return arr.join('')
}
/*
P: non-negative integer
R: string of sheep
E: 2 -> "1 sheep...2 sheep..."
*/
