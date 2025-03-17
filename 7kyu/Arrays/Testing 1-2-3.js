let number=function(array){
  return array === [] ? [] : array.map((element,index)=> index + 1 + ': ' + element)
}
/*
P: List of strings 
R: each line prepended by the correct number
E: ["a","b","c"]-> ["1: a"...]
*/
