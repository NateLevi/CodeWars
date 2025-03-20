function sortMyString(S) {
  let oddIndex = ''
  let evenIndex = ''
  
  for(let i=0; i<S.length ;i++){
    if( i % 2 !== 0){
      oddIndex += S[i]
    }
    else{
      evenIndex += S[i]
    }
  }
  return `${evenIndex} ${oddIndex}`
}
/*
P: string
R: return string where even-indexed and odd-indexed characters are grouped and space separated.
E: "Test"-> "Ts et"
*/
