function toCsvText(array) {
   return array.map(row => row.join(',')).join('\n');
}

/*
P:array within array of numbers
R: return the CSV representation
E: [[0,1,2,3]] -> '0,1,2,3'
*/
