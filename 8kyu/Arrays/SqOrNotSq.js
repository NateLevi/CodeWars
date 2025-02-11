/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/
const squareOrSquareRoot = array => array.map(num => 
  Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num**2
)
/*
P: array of integers
R: new array if element has a square root
E: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/
