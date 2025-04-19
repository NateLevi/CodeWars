function howManyGifts(maxBudget, gifts){
  let total = gifts.sort((a,b)=> a - b)
  let giftTotal = 0
  let amount = 0
  for(let i=0; i < total.length; i++){
    if(giftTotal + total[i] <= maxBudget){
      giftTotal += total[i];
      amount++;
    }
  }
  return amount
}

/*
P: maxBudget = number gifts = array of price of gifts
R: integer of maximum amount of gifts Leo can buy
E: 20,[13,2,4,6,1]-> 4
P:If total is under the maxBudget and the element is under 20 then add 1 to a total and return total after loop
*/
