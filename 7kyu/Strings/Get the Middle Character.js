function getMiddle(s) {
  let arr = s.split('')
  let oddMid = Math.floor(arr.length/2)
  let firstEvenMid = (arr.length/2) - 1
  let secEvenMid = (arr.length/2)
  
  if(s.length % 2 === 0){
    return arr[firstEvenMid] + arr[secEvenMid]
  }
  else if(s.length % 2 !== 0){
    return arr[oddMid]
  }
  else{
    return s
  }
}
/*
P: non-empty string
R: return the middle character of the string, odd -> middle char, even -> middle 2 chars
E: "test"-> "es"
*/
