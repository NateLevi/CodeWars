function secondSymbol(s, symbol) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      count++;
      if (count === 2) {
        return i;  
      }
    }
  }
  return -1; 
}
/*
P: string and letter
R: index of second occurence of that letter in string -1 if no letter
E: "Hello World",'l'-> 3
P: loop through string if element includes symbol return add to count
*/
