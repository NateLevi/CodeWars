function bump(x){
  const arr = x.split('')
  let xSum = 0;
  for (let i=0; i < arr.length; i++){
    if (arr[i] === 'n') {
      xSum++;
    }
  }
  
  return xSum <= 15 ? "Woohoo!" : "Car Dead"
}
/*
P: String with _ or n 
R: "Woohoo!" if less then 15 n's otherwise "Car Dead"
E: 
*/
