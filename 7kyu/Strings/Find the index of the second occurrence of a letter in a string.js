function secondSymbol(s, symbol) {
  let string = s.split('')
  let count = 0
  
  for( let i= 0 ; i < string.length; i++){
    if(string[i].includes(symbol)){
      count += [i]
    }
  }
  return count === 0 ? -1 : Number(count[2])
}
/*
P: string and letter
R: index of second occurence of that letter in string -1 if no letter
E: "Hello World",'l'-> 3
P: loop through string if element includes symbol return add to count
*/
