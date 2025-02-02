/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
*/

function multiTable(number) {
  let result = '';
  for(let i=1; i <= 10; i++){
    result+= `${i} * ${number} = ` + i * number
    if(i < 10) result += '\n'
  }
  return result
}
