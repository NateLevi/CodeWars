/*
Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.
*/
function capital(capitals){
  return capitals.map((x) =>`The capital of ${x.state || x.country} is ${x.capital}`) 
}
