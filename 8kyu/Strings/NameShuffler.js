/*
Write a function that returns a string in which firstname is swapped with last name.
*/

function nameShuffler(str){
  let sep = str.split(' ')
  let arr = [sep[1],sep[0]]
  return arr.join(' ')
}
