function removeConsecutiveDuplicates(str) {
  return str.split(' ').filter((e,i,arr)=> e !== arr[i - 1]).join(' ')
}

/*
P: string = list of strings
R: remove all consecutive duplicated words from string
E: "hello hello my my my name is is is is nate nate nate"-> "hello my name is nate"
P: Make words into array, loop through, filter out words that occur once. 
  
*/
