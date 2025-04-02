// Return an array
function fizzbuzz(n){
  const arr = []
  for(let i = 1 ; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push("FizzBuzz")
    }
    else if(i % 3 === 0){
      arr.push("Fizz")
    }
    else if(i % 5 === 0){
      arr.push("Buzz")
    }
    else{
      arr.push(i)
    }
  }
  return arr
}
/*
P: n is a number
R: Array containing numbers from 1 to n, if multple of 3 use Fizz, if 5 Buzz, if 3 & 5 FizzBuzz
E: 4 -> [1,2,3,4]
*/
