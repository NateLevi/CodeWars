function stringMerge(string1, string2, letter){
  let index1 = string1.indexOf(letter)
  let index2 = string2.indexOf(letter)
  let part1 = string2.slice(index2,string2.length) 
  let part2 = string1.slice(0,index1)
  
  return `${part2}${part1}`
  
}

/*
P: two stirngs and a letter
R: return a single word combining both words merged wherever the letter is
E: "hello", "you", "e" -> "hyoullo"
P: Find the index of the letter, then replace that index with a slice of string2
*/
