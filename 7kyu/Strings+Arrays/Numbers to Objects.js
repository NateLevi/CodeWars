function numObj(s){
  let arr = []
  
  return s.map(n => ({ [String(n)]: String.fromCharCode(n) }));

}
