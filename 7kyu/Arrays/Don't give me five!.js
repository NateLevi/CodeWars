function dontGiveMeFive(start, end)
{
  let num = []
  for ( let i = start; i <= end; i++){
    if(!i.toString().includes('5')){
      num.push(i)
    }

  }
  return num.length
}
/*
P: start number and end number 
R: return all numbers between those numbers but no 5s
E: 1,6 -> 1,2,3,4,6
P: make an array of all numbers, filter out != 5, return count
*/
