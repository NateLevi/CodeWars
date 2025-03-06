function switcheroo(x){
  let result = []
  let arr = x.split('')
    for(let i=0;i<arr.length;i++){
      if(arr[i] === 'a'){
        result.push('b')
      }
      else if(arr[i]=== 'b'){
        result.push('a')
      }
      else{
        result.push(arr[i])
      }
    }
  return result.join('')
}
/*
P: string made of a,b, and/or c
R: switch a and b, if theres an a make it b, vice versa
E: 'acb' -> 'bca'
*/
