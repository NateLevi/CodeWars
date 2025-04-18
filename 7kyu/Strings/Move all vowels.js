function moveVowel(input) {
  let str = input.split('')
  let vowels = 'aeiou'
  let arr = []
  
  for( let i = 0 ; i < str.length; i++){
    if(!vowels.includes(str[i])){
      arr.push(str[i])
    }
  }
  
  for( let i = 0 ; i < str.length; i++){
    if(vowels.includes(str[i])){
      arr.push(str[i])
    }
  }
  
  return arr.join('')
}
/*
P: input = string
R: return string but with all vowels to the end of the string
E:
*/
