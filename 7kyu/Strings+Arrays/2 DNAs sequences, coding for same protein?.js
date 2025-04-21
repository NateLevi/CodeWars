function codeForSameProtein(seq1,seq2){
  
  let arr1 = []
  let arr2 = []
  
  for (let i = 0; i < seq1.length; i += 3){
    arr1.push(seq1.slice(i,i + 3))
  }
  for (let i = 0; i < seq2.length; i += 3){
    arr2.push(seq2.slice(i,i + 3))
  }
  
  let code1 = arr1.map(e => codons[e])
  let code2 = arr2.map(e => codons[e])
  
  return code1.every((e,i) => e === code2[i])
  
}
// If seq1 and seq2 amino acid are the same return true else false
