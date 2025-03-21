function divCon(x){
  let total = 0
  
  for(let i=0; i< x.length; i++){
    if(x[i] === Number(x[i])){
      total += Number(x[i])
    }
    else if(x[i] !== Number(x[i])){
      total -= Number(x[i])
    }
  }
  
  return total
}
/*
P: mixed arr of number and string of integers
R: add the non-string integers and subtract the total of the string integers
E: [1,'2','3',4,5]-> 5
*/
