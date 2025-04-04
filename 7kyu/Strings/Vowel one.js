function vowelOne(s){
  const vowel = 'aeiou'
  let total = ''
  for ( let i=0; i<s.length;i++){
    if(!vowel.includes(s[i].toLowerCase()) || /[^A-Za-z0-9]/.test(s[i])){
      total += "0"
    }
    else {
      total += "1"
    }
  }
  return total
}
/*
P: string with vowels and non-vowels
R: string of numbers, 1 for vowels, 0 for non-vowels
E: "acdefghi"-> "10010001"
*/
