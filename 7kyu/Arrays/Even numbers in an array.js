function evenNumbers(array, number) {
  const evenNumbers = array.filter(e=> e % 2 === 0)
  
  return evenNumbers.slice(evenNumbers.length - number)
  
}

/*
P: array of numbers
R: new array of length of last even numbers of original array
E: [1,2,3,4,5,6,7,8],3-> [2,4,6]
P: loop through array, if element is even add to new array then stop after (number) occurances
*/
