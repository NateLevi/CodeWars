function gimmeTheLetters(sp) {
  if (sp[0] === sp[0].toUpperCase() && sp[2] === sp[2].toUpperCase()){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const index1 = alphabet.indexOf(sp[0])
    let index2 = alphabet.indexOf(sp[2])
    let index3 = index2 + 1
    return alphabet.slice(index1,index3)
  }
  else{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const index1 = alphabet.indexOf(sp[0])
    let index2 = alphabet.indexOf(sp[2])
    let index3 = index2 + 1
    return alphabet.slice(index1,index3)
  }
  
}
/*
P: string of range of letters
R: string includes letters in that range
E: "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
*/
