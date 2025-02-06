/*
Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
*/
function heggeleggleggo(word){
  let arr = word.split('')
  
  for(let i = 0; i < arr.length; i++){
    if(!['a','e','i','o','u',' '].includes(arr[i].toLowerCase())){
      arr.splice(i + 1, 0, "egg")
      i++
    }
  }
  return arr.join('')
}
  // split the string to an array of letters and loop through it, after each consonant, insert egg into the array then join back

/*
P: string
R: string with egg replaced in any instances of a consonant
E: hello -> heggeleggleggo
*/

