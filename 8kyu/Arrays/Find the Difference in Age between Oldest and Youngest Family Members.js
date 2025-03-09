function differenceInAges(ages){
  const arr = ages.sort((a,b)=> a-b)
  const difference = arr[arr.length-1] - arr[0]
  return [arr[0],arr[arr.length-1],difference]
  
}
/*
P:array of family member ages
R:new array of [youngest age,oldest age, difference between youngest and oldest]
E: [5,36,31]
*/
