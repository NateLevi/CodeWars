function triangle(row) {
  let currentRow = row.split('');
  
  while (currentRow.length > 1) {
    let nextRow = [];
    
    for (let i = 0; i < currentRow.length - 1; i++) {
      let first = currentRow[i];
      let second = currentRow[i + 1];
      
      if (first === second) {
        nextRow.push(first);
      } 
      else if ((first === 'G' && second === 'B') || (first === 'B' && second === 'G')) {
        nextRow.push('R');
      }
      else if ((first === 'G' && second === 'R') || (first === 'R' && second === 'G')) {
        nextRow.push('B');
      }
      else {
        nextRow.push('G');
      }
    }
    
    currentRow = nextRow;
  }
  
  return currentRow[0];
}
