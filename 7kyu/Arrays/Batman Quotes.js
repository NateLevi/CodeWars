var getQuote = function(quotes, hero){
  let index = Number(hero.split('').filter(e => Number(e)).join(''))
  
  if(hero.includes('R')){
    return `Robin: ${quotes[index]}`
  }
  else if(hero.includes('B')){
    return `Batman: ${quotes[index]}`
  }
  else{
    return `Joker: ${quotes[index]}`
  }
  
}
/*
P: quotes = array of quotes, hero = letters with a number corresponding to quote index
R: Return quote with character 
E: ["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n" "Robin: Holy haberdashery, Batman!
P:
*/
