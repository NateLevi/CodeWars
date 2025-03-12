//1
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
//2
const reverseWords= str => str.split(' ').reverse().join(' ')
/*
P: sentence string
R: sentence reversed no spaces in front or back
E: "This is a test"-> "test a is This"
*/
