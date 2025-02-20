/*
Your task is to create a change machine.

The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of "50p" should yield the exact string "20p 20p 10p".
*/
function changeMe(moneyIn){
  if(moneyIn === '£5'){
     return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"}
  else if(moneyIn === '£2'){
    return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
  }
  else if(moneyIn === '£1'){
    return "20p 20p 20p 20p 20p"
  }
  else if(moneyIn === "50p"){
    return "20p 20p 10p"
  }
  else if(moneyIn === "20p"){
    return "10p 10p"
  }
  else{
    return moneyIn
  }
}
/*
P: string containing the coin or note to be processed
R: string with the coin names seperated by single spacees, only 20p or 10p coins
E: "50p" -> "20p 20p 10p"
*/
