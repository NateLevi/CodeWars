/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
    let spread = str.toLowerCase().split('')
    
    let numOfX = spread.reduce((acc, cur) => cur === 'x' ? acc + 1 : acc, 0);
    let numOfO = spread.reduce((acc, cur) => cur === 'o' ? acc + 1 : acc, 0);
    
    if(numOfX === numOfO){
      return true
    }
    else{
      return false
    }
}
