function capitalize(s){
  let arr = s.split('')
  let result1 = []
  let result2 = []
  for (let i=0;i<arr.length;i++){
    if(i % 2 == 0){
      result1.push(arr[i].toUpperCase())
    }
    else{
      result1.push(arr[i])
    }
  }
  for (let i=0;i<arr.length;i++){
    if(i % 2 !== 0){
      result2.push(arr[i].toUpperCase())
    }
    else{
      result2.push(arr[i])
    }
  }
  return [result1.join(''),result2.join('')]
};
/*
P: string of letters
R: array of capitalized even indexes and odd indexes
E: 'acde' -> [AcDe,aCdE]
*/
