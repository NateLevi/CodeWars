/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.
*/
/*
P: string passed into s
R: ints counting uppercase letters, lowercase, numbers and special characters
E: "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
*/
//Split the string into an array, Loop through the array, count the specified characters and store into a variable
//Do that for uppercase letters, lowercase letters, numbers and special characters. Then make an array with the counts. 
function solve(s){
 let arr = s.split('')
 
  let upperCase =0;
  let lowerCase =0;
  let numbers =0;
  let special =0;
  
  arr.forEach(x => /[A-Z]/.test(x) ? upperCase++ : null);
  arr.forEach(x => /[a-z]/.test(x) ? lowerCase++ : null);
  arr.forEach(x => /[0-9]/.test(x) ? numbers++ : null);
  arr.forEach(x => /[^A-Za-z0-9]/.test(x) ? special++ : null);
  
  return [upperCase,lowerCase,numbers,special]
  
}
