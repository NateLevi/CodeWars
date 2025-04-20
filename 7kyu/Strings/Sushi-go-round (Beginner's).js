function totalBill(str) {
  let sushi = str.split('').filter(e=> e==='r').length
  
  let sum = sushi * 2
  
  if(sushi >= 5){
    let plates = Math.floor(sushi / 5)
    plates = plates * 2
    sum -= plates
  }
      
    return sum
}

/*
P: str = number of plates
R: return total amount a customers pay, red plates of sushi = $2 each, every 5th one is free, condiments = free
E: "rr rr"-> 8
P: Loop through, every element that's "r" add 2 to the sum, if the count of r is more then 5 then subtract 2
*/
