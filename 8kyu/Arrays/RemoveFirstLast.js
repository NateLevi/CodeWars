/*
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/
function array(string) {
  
  const arr = string.split(',')
  
  if(string === "" || string === 1 || arr.length <= 2){
     return null
     }
  else if(arr.length > 2){
    const first = arr.shift()
    const last = arr.pop()
    return arr.join(' ')
  }
}
