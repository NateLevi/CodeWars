function findUniq(arr){
  let testArray = [...new Set(arr)];

  for (let i = 0; i < testArray.length - 1; i++) {
    
    
    
    const charCodes = testArray[i].split('').filter(e=> e !== ' ').map(e=> e.toLowerCase()).sort((a, b) => a.localeCompare(b)).map(e => e.charCodeAt(0));
    const nextCharCodes = testArray[i + 1].split('').filter(e=> e !== ' ').map(e=> e.toLowerCase()).sort((a, b) => a.localeCompare(b)).map(e => e.charCodeAt(0));
    
    const current = charCodes.join(',');
    const next = nextCharCodes.join(',');
    
    
    if (current !== next) {
      return testArray[i + 1];
    }
  }
}
// loop through elements, get the char codes at each element, check if elements include char codes if not return


/*
P: array of strings, similar letters except one
R: Find the string that is different then the rest
E: [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ] === 'foo'
P: Loop through array, check if next element includes the same letters as previous, then return if false
*/
