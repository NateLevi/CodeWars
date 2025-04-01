function nicknameGenerator(name){
  const vowels = 'aeiou'
  
  if (name.length < 4){
    return "Error: Name too short"
  }
  else if (vowels.includes(name[2])){
    return `${name[0]}${name[1]}${name[2]}${name[3]}`
  }
  else{
    return `${name[0]}${name[1]}${name[2]}`
  }
}
/*
P: string 
R: if first 3 are consonant return first 3 letters else if 3rd is vowel, return first 4 letters
E: "Robert"-> "Rob"
*/
