/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

You can not use multiplier "*" operator.
*/
function billboard(name, price = 30){
  //split the name into an array, count how many elements there are, then multiple result by 30
  let nameLength = name.split('').length
  
  return nameLength / (1 / price)
  
} 

/*
P: String, can include spaces
R: number of euros
E: Elon Musk, = 270
*/
