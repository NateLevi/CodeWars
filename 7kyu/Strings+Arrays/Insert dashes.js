function insertDash(num) {
  let arr = String(num).split('');
   
  for(let i = 0; i < arr.length - 1; i++){
    if(Number(arr[i]) % 2 !== 0 && Number(arr[i + 1]) % 2 !== 0){
      arr[i] = arr[i] + '-';
    }
  }
  let result = arr.join('');
  if(result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  return result;
}
/*
P: num is an integer
R: return string of num with dashes between each two odd digits
E: [82048396753]-> 820483-9675-3
P: loop through array of num, based on index if following num is odd then add a - 
*/
