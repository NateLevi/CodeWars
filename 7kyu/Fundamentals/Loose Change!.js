
function changeCount( change ){
  let total = 0
  
  let words = change.split(' ')
  
  for (let i=0; i < change.length;i++){
    
    for(const coin in CHANGE)
    
    if(words[i] === coin){
      total += CHANGE[coin]
    }
    
  }
  return `$${total.toFixed(2)}`;
}
